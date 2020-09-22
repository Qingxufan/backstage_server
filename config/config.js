const mongodb = {
  db_user: "game",
  db_pwd: "",
  db_host: "localhost",
  db_port: 27017,
  db_name: "backstage",
  url:'mongodb://192.168.0.11:27017/backstage'
  //url: 'mongodb://ubstage:RUTSwmDuFVhGNySLFtDtpIZuXA1cz3;;@172.31.20.110:27017/backstage'

}
const statisticmongodb = {
  db_user: "game",
  db_pwd: "",
  db_host: "localhost",
  db_port: 27017,
  db_name: "statistic",
  //url:'mongodb://127.0.0.1:27017/statistic'
  url:'mongodb://192.168.0.11:27017/statistic'
  //url: 'mongodb://ustatis:VOAQNmBDvLfJVP3kJXzadoVfyUIm44;;@172.31.20.110:27017/statistic'
}
const arcade_center_test = {
  db_user: "game",
  db_pwd: "",
  db_host: "localhost",
  db_port: 27017,
  db_name: "arcade-center-test",
  url: 'mongodb://192.168.0.11:27017/arcade-center-test'
  //url: 'mongodb://uarcade:UuPtGI0qRxqlYgioD0P33HEIqWfL1j;;@172.31.20.110:27017/arcade-center'
}
module.exports = { mongodb, statisticmongodb, arcade_center_test }