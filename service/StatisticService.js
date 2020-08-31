const ResUtil = require('../utils/ResUtil')
const moment = require('moment');
const config = require('../config/config')
const source = require('../models/Source')
const CommonUtil = require('../utils/CommonUtil')
const UserSummary_total = require('../models/UserSummary_total')
const UserSummary_day = require('../models/UserSummary_day')
const Game = require('../models/Game')
const Room = require('../models/Room')

async function getGoldChangeList(uid, time_range, changeType, page) {
     let query = { 'uid': uid }
     time_range = time_range || [0, 0]
     if (time_range[1] > 1000) {
          query.timestamp = { $gt: time_range[0] || 0, $lt: time_range[1] }
     } else if (time_range[0] > 1000) {
          query.timestamp = { $gt: time_range[0] }
     }
     if (changeType != null && changeType != undefined) {
          if (changeType > 0) {
               query.type = changeType
               query.diff = { $gt: 0 }
          } else {
               query.type = Math.abs(changeType)
               query.diff = { $lt: 0 }
          }
     } else {
          query.type = { $lt: 10 }
     }
     let count = await source.count(query) || 0
     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     if (count < (current_page - 1) * page_size) {
          return ResUtil.getSuccess({ total: 0, list: [] });
     }
     let list = await source.find(query).sort({ timestamp: -1 }).skip((current_page - 1) * page_size).limit(page_size)
     return ResUtil.getSuccess({ total: count, list: list });
}

async function getGoldChangeNoGameList(uid, diff_range, changeType, page) {
     let query = { 'uid': uid, 'type': changeType }
     if (diff_range[1] != undefined) {
          query.diff = { $gt: diff_range[0] || 0, $lt: diff_range[1] }
     } else if (diff_range[0] != undefined) {
          query.diff = { $gt: diff_range[0] }
     }
     let count = await source.count(query) || 0
     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     if (count < (current_page - 1) * page_size) {
          return ResUtil.getSuccess({ total: 0, list: [] });
     }
     let list = await source.find(query).skip((current_page - 1) * page_size).limit(page_size).sort({ timestamp: -1 })
     return ResUtil.getSuccess({ total: count, list: list });
}

async function giveAndReceiveList(uid, diff_range, page) {
     let query = { 'uid': uid, 'type': 12 }
     if (diff_range[1] != undefined) {
          query.diff = { $gt: diff_range[0] || 0, $lt: diff_range[1] }
     } else if (diff_range[0] != undefined) {
          query.diff = { $gt: diff_range[0] }
     }
     let count = await source.count(query) || 0
     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     if (count < (current_page - 1) * page_size) {
          return ResUtil.getSuccess({ total: 0, list: [] });
     }
     console.log(query)
     let list = await source.find(query).skip((current_page - 1) * page_size).limit(page_size).sort({ timestamp: -1 })
     return ResUtil.getSuccess({ total: count, list: list });
}

async function getPlayerAccountList(uid, diff_range, search_item, page) {
     let query = {}
     if (uid) {
          query.uid = uid
     }
     search_item = search_item || 'total_gold'
     if (diff_range[0] != undefined) {
          query[search_item] = { $gt: diff_range[0] }
     }
     if (diff_range[1] != undefined) {
          if (!query[search_item] || !query[search_item].$gt) {
               query[search_item] = { $lt: diff_range[1] }
          } else {
               query[search_item].$lt = diff_range[1]
          }
     }
     let count = await UserSummary_total.count(query) || 0
     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     if (count < (current_page - 1) * page_size) {
          return ResUtil.getSuccess({ total: 0, list: [] });
     }
     let list = await UserSummary_total.find(query).sort({ [search_item]: -1 }).skip((current_page - 1) * page_size).limit(page_size)
     return ResUtil.getSuccess({ total: count, list: list });
}

async function getRealTimeData(search, page) {
     let item = search.item
     let value = search.value
     let range_obj = search.range_obj
     let range = search.range
     //let sort = search.sort

     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     let query = {}
     query[item || 'uid'] = value
     if (range[0] != undefined) {
          query[range_obj] = { $gt: range[0] }
     }
     if (range[1] != undefined) {
          if (!query[range_obj] || !query[range_obj].$gt) {
               query[range_obj] = { $lt: range[1] }
          } else {
               query[range_obj].$lt = range[1]
          }

     }
     //总数据
     let count = await UserSummary_total.count(query) || 0
     let total_list = await UserSummary_total.find(query).sort({ total_gold: -1 }).skip((current_page - 1) * page_size).limit(page_size)
     let uuids = []
     let today = moment().format('YYYY-MM-DD')
     total_list.forEach(item => {
          uuids.push(today + "_" + item.uid)
     })
     //日数据
     let day_list = await UserSummary_day.find({ "_id": { $in: uuids } })
     let list = []
     total_list.forEach((item) => {
          let total_day = { "total": item }
          day_list.forEach((item2) => {
               if (item.uid == item2.uid) {
                    total_day.day = item2
               }
          })
          list.push(total_day)
     })
     return ResUtil.getSuccess({ total: count, list: list });
}

async function getGameRecord(search, page) {
     let game = null
     let room = null
     let query = {}
     if (!search.game && !search.room && !search.round_id) {
          return ResUtil.resErr.param_lose;
     }
     if (search.game) {
          if (!CommonUtil.checkRate(search.game)) {
               game = await Game.findOne({ "name": search.game })
          } else {
               game = await Game.findOne({ "game_id": search.game })
          }
          query.game_id = game.game_id
     }

     if (search.room) {
          if (!CommonUtil.checkRate(search.room)) {
               room = await Room.findOne({ "roomName": search.room })
          } else {
               room = await Room.findOne({ "room_id": search.room })
          }
          query.room_id = game.room_id
     }

     if (search.round_id) {
          query.round_id = search.round_id
     }

     let count = await source.count(query) || 0
     let current_page = page.current_page || 1
     let page_size = page.page_size || 10
     if (count < (current_page - 1) * page_size) {
          return ResUtil.getSuccess({ total: 0, list: [] });
     }

     let source_list = await source.find(query).sort({ timestamp: -1 }).skip((current_page - 1) * page_size).limit(page_size)
     let list = []
     source_list.forEach(item=>{
          item.roomName = room.roomName
          item.roomName = room.roomName
     })




     return ResUtil.getSuccess({ total: count, list: list });
}


module.exports = { getGoldChangeList, getGoldChangeNoGameList, giveAndReceiveList, getPlayerAccountList, getRealTimeData, getGameRecord }

