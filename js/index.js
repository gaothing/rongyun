RongIMClient.init("z3v5yqkbz1xj0"); //这是初始化，需要填参数就是你的APPKEY。这个不难理解。
var token = "zdy69RIJfKYG2wJ82B+13QXGQhGIJiX4RCueQq8ljG0EPoX0pZUXnGIZ1MLDWSZ8uNYTbLWVvDebRKuUa+4Pqg=="; //注册时的token
var targetId="1"
//---------------------------
RongIMClient.connect(token, {
	onSuccess: function(userId) {

		console.log("Login successfully." + userId);
	},
	onTokenIncorrect: function() {
		console.log('token无效');
	},
	onError: function(errorCode) {
		var info = '';
		switch(errorCode) {
			case RongIMLib.ErrorCode.TIMEOUT:
				info = '超时';
				break;
			case RongIMLib.ErrorCode.UNKNOWN_ERROR:
				info = '未知错误';
				break;
			case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
				info = '不可接受的协议版本';
				break;
			case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
				info = 'appkey不正确';
				break;
			case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
				info = '服务器不可用';
				break;
		}
		console.log(errorCode);
	}
});
//-------------------------------
// 设置连接监听状态 （ status 标识当前连接状态）
// 连接状态监听器
RongIMClient.setConnectionStatusListener({
	onChanged: function(status) {
		switch(status) {
			//链接成功
			case RongIMLib.ConnectionStatus.CONNECTED:
				console.log('链接成功');
				break;
				//正在链接
			case RongIMLib.ConnectionStatus.CONNECTING:
				console.log('正在链接');
				break;
				//重新链接
			case RongIMLib.ConnectionStatus.DISCONNECTED:
				console.log('断开连接');
				break;
				//其他设备登陆
			case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
				console.log('其他设备登陆');
				break;
				//网络不可用
			case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
				console.log('网络不可用');
				break;
		}
	}
});

// 消息监听器
RongIMClient.setOnReceiveMessageListener({
	// 接收到的消息
	onReceived: function(message) {
		// 判断消息类型
		switch(message.messageType) {
			case RongIMClient.MessageType.TextMessage:
				console.log(message)

				var content = RongIMLib.RongIMEmoji.symbolToHTML(message.content.content)
				var newHtml = '<li><div class="avatar_side"><img  class="img" src="' + message.content.extra.avatar + '" /></div><div class="msg_side"><div class="text">' + content + '</div></div></li>';
				$(".contentBox").append(newHtml)
				$(".contentBox").get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
				//发送的消息内容将会被打印
				break;
			case RongIMClient.MessageType.ImageMessage:

				var newHtml = '<li><div class="avatar_side"><img  class="img" src="' + message.content.content.avatar + '" /></div><div class="msg_side"><div class="img"><img src="' + message.content.imageUri + '"/></div></div></li>';
				$(".contentBox").append(newHtml)
				$(".contentBox").get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
				// do something...
				break;
			case RongIMClient.MessageType.DiscussionNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.LocationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.RichContentMessage:
				// do something...
				break;
			case RongIMClient.MessageType.DiscussionNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.InformationNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.ContactNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.ProfileNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.CommandNotificationMessage:
				// do something...
				break;
			case RongIMClient.MessageType.CommandMessage:
				// do something...
				break;
			case RongIMClient.MessageType.UnknownMessage:
				// do something...
				var content = RongIMLib.RongIMEmoji.symbolToHTML(message.content.content.bqmmContent)
				var newHtml = '<li><div class="avatar_side"><img  class="img" src="' + message.content.extra.avatar + '" /></div><div class="msg_side"><div class="text">' + content + '</div></div></li>';
				$(".contentBox").append(newHtml)
				$(".contentBox").get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
				break;
			default:
				// 自定义消息
				// do something...
		}
	}
});
//监听输入框输入
$("#tetxCon").on("input", function() {
	if($(this).val()) {
		$(".add").css("display", "none")
		$(".senBtn").css("display", "block")
	} else {
		$(".add").css("display", "block")
		$(".senBtn").css("display", "none")
	}
})
$("#tetxCon").on("focus",function(){
		$("#emoticonAll").css("display", "none");
	    $("#upBox").css("display", "none")
})
//点击发送(文本与表情)
$(".senBtn").on("click", function() {
	sendText($("#tetxCon").val())
	$("#tetxCon").val("")
	$(".add").css("display", "block")
	$(".senBtn").css("display", "none")
	$(".contentBox").get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
})
//发送文本消息
function sendText(msg) {
	//-------------------------------------
	// 定义消息类型,文字消息使用 RongIMLib.TextMessage

	//或者使用RongIMLib.TextMessage.obtain 方法.具体使用请参见文档
	var sendObj = {
		content: msg,
		extra: {
			avatar: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3761083504,3769519560&fm=5"
		}
	}
	var msg = new RongIMLib.TextMessage(sendObj);
	var conversationtype = RongIMLib.ConversationType.PRIVATE; // 私聊

	RongIMClient.getInstance().sendMessage(conversationtype, targetId, msg, {
		// 发送消息成功
		onSuccess: function(message) {
			var content = RongIMLib.RongIMEmoji.symbolToHTML(sendObj.content)
			//message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
			var newHtml = '<li><div class="avatar_side avatar_self"><img  class="img" src="' + sendObj.extra.avatar + '" /></div><div class="msg_side msg_self"><div class="text">' + content + '</div></div></li>';
			$(".contentBox").append(newHtml).get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
			console.log("Send successfully");

		},
		onError: function(errorCode, message) {
			var info = '';
			switch(errorCode) {
				case RongIMLib.ErrorCode.TIMEOUT:
					info = '超时';
					break;
				case RongIMLib.ErrorCode.UNKNOWN_ERROR:
					info = '未知错误';
					break;
				case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
					info = '在黑名单中，无法向对方发送消息';
					break;
				case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
					info = '不在讨论组中';
					break;
				case RongIMLib.ErrorCode.NOT_IN_GROUP:
					info = '不在群组中';
					break;
				case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
					info = '不在聊天室中';
					break;
				default:
					info = x;
					break;
			}
			console.log('发送失败:' + info);
		}
	});
}

function getIMTime(nS) {
	return new Date(parseInt(nS)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}

function kk() {
	//              var that = this;
	var conversationType = RongIMLib.ConversationType.PRIVATE //私聊,其他会话选择相应的消息类型即可。
	var timestrap = 0; // 默认传 null，若从头开始获取历史消息，请赋值为 0 ,timestrap = 0;
	var count = 5; // 每次获取的历史消息条数，范围 0-20 条，可以多次获取。
	RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
		onSuccess: function(list, hasMsg) {
			// list => Message 数组。
			// hasMsg => 是否还有历史消息可以获取。
			console.log(list,hasMsg)

//			if(hasMsg) {
				var historyHtml = []
				var avatar = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1476692208,2742622493&fm=5';
				for(var i = 0, j = list.length; i < j; i++) {
					if(list[i].messageType == "TextMessage") {
						var sentTime = getIMTime(list[i].sentTime),
							content = RongIMLib.RongIMEmoji.symbolToHTML(list[i].content.content),
							targetName = list[i].content.extra.name;
						if(list[i].senderUserId != targetId) {
							var newHtml = '<li><div class="avatar_side avatar_self"><img  class="img" src="' + avatar + '" /></div><div class="msg_side msg_self"><div class="text">' + content + '</div></div></li>';

							historyHtml.push(newHtml)
						} else {
							var newHtml = '<li><div class="avatar_side "><img  class="img" src="' + avatar + '" /></div><div class="msg_side "><div class="text">' + content + '</div></div></li>';
							
							historyHtml.push(newHtml)
						}
					}else if(list[i].messageType == "ImageMessage"){
						if(list[i].senderUserId != targetId) {
							var newHtml = '<li><div class="avatar_side avatar_self"><img  class="img" src="' + avatar + '" /></div><div class="msg_side msg_self"><div class="img"><img src="' +list[i].content.imageUri + '"/></div></div></li>';

							historyHtml.push(newHtml)
						} else {
							var newHtml = '<li><div class="avatar_side "><img  class="img" src="' + avatar + '" /></div><div class="msg_side "><div class="img"><img src="' + list[i].content.imageUri + '"/></div></div></li>';
							
							historyHtml.push(newHtml)
						}
					}
				}

				$(".contentBox").append(historyHtml.join("")).get(0).scrollTop = $(".contentBox").get(0).scrollHeight;
//			}
		},
		onError: function(error) {
			console.log("GetHistoryMessages,errorcode:" + error);
		}
	});
}
setTimeout(function() {
	kk()
}, 1000)
//图片预览
$(".contentBox").on("click", "img", function() {
	var src = $(this).attr("src")
	$(".viewImg").css("display", "block").find("img").attr("src", src)
})
$(".viewImg").on("click", function() {
	$(this).hide()
})