module.exports = {
	code: {
		'success': 200,
		'err': {
			//参数
			general_err: 1001, //通用错误
			param_lose: 1002, //缺少参数
			param_type: 1003, //参数类型错误

			//账户
			user_lost: 1011, //用户不存在
			token_useless: 1012,// token 检验不成功
			session_useless: 1013,// 用户登录过期
			promission_limit: 1014, //权限不够

			//操作
			operation_fail: 1020,//操作失败

		}
	},
	success: {
		code: 200,
		message: "操作成功!",
		data: {}
	},
	error: {
		code: 1001,
		message: "操作失败!",
		data: {}
	},
	resErr: {
		param_lose: { 'code': 1002, 'message': '缺少参数', 'data': {} },
		param_type: { 'code': 1003, 'message': '参数类型错误!', 'data': {} },
		password_err: { 'code': 1010, 'message': '密码错误!', 'data': {} },
		user_lost: { 'code': 1011, 'message': '用户不存在!', 'data': {} },
		user_has: { 'code': 1015, 'message': '用户已存在!', 'data': {} },
		token_useless: { 'code': 1013, 'message': '用户校验失败!', 'data': {} },
		session_useless: { 'code': 1012, 'message': '账户过期,请重新登录!', 'data': {} },
		promission_limit: { 'code': 1014, 'message': '用户无此权限', 'data': {} },
		operation_fail: { 'code': 1020, 'message': '操作失败', 'data': {} },
	},
	getSuccess(data) {
		return {
			code: 200,
			message: "操作成功!",
			data: data
		}
	}
};