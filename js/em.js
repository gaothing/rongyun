		//本文件主要包含的内容和函数方法
		//1*    表情的初始化
		//2*表情列表的获取和分页追加
		//3*表情和加号开关的点击
		//4*图片的发送
		//5*地址栏的参数获取token(用于上传图片图片)
		var config = {
			size: 24, // 大小, 默认 24, 建议15 - 55
			url: '//f2e.cn.ronghub.com/sdk/emoji-48.png', // 所有 emoji 的背景图片
			lang: 'zh', // 选择的语言, 默认 zh
			// 扩展表情
			extension: {
				dataSource: {
					"u1F914": {
						"en": "thinking face", // 英文名称
						"zh": "思考", // 中文名称
						"tag": "🤔", // 原生emoji
						"position": "0px 0px" // 所在背景图位置坐标
					},
				},
				// 新增 emoji 的背景图 url
				url: 'https://emojipedia-us.s3.amazonaws.com/thumbs/160/apple/96/thinking-face_1f914.png'
			}
		};
		var targetId = "1";
		//表情初始化
		RongIMLib.RongIMEmoji.init(config);
		//获取表情列表
		var list = RongIMLib.RongIMEmoji.list;
		var oneList = list.slice(0, 20);
		var twoList = list.slice(20, 40)
		var threeList = list.slice(40, 60);
		var fourList = list.slice(60, 80)
		var fiveList = list.slice(80, 100)
		var sixList = list.slice(100, 120)
		var sevenList = list.slice(120)
		var oneListHtml = [];
		var twoListHtml = [];
		var threeListHtml = [];
		var fourListHtml = [];
		var fiveListHtml = [];
		var sixListHtml = [];
		var sevenListHtml = []
		oneList.forEach(function(v, i) {
			oneListHtml.push("<li  con='" + v.symbol + "'  em='" + v.emoji + "'><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		twoList.forEach(function(v, i) {
			twoListHtml.push("<li con='" + v.symbol + "' em='" + v.emoji + "' ><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		threeList.forEach(function(v, i) {
			threeListHtml.push("<li  con='" + v.symbol + "' em='" + v.emoji + "' ><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		fourList.forEach(function(v, i) {
			fourListHtml.push("<li con='" + v.symbol + "' em='" + v.emoji + "' ><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		fiveList.forEach(function(v, i) {
			fiveListHtml.push("<li con='" + v.symbol + "' em='" + v.emoji + "' ><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		sixList.forEach(function(v, i) {

			sixListHtml.push("<li con='" + v.symbol + "' em='" + v.emoji + "' ><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		sevenList.forEach(function(v, i) {
			sevenListHtml.push("<li con='" + v.symbol + "'  em='" + v.emoji + "'><div style='background-image:" + v.node.style.backgroundImage + ";background-size:" + v.node.style.backgroundSize + ";background-position:" + v.node.style.backgroundPosition + "'  ></div></li>");
		})
		oneListHtml.push("<li><i>&#xe684;</i></li>")
		twoListHtml.push("<li><i>&#xe684;</i></li>")
		threeListHtml.push("<li><i>&#xe684;</i></li>")
		fourListHtml.push("<li><i>&#xe684;</i></li>")
		fiveListHtml.push("<li><i>&#xe684;</i></li>")
		sixListHtml.push("<li><i>&#xe684;</i></li>")
		sevenListHtml.push("<li><i>&#xe684;</i></li>")
		$(".emBox1").html(oneListHtml.join(""))
		$(".emBox2").html(twoListHtml.join(""))
		$(".emBox3").html(threeListHtml.join(""))
		$(".emBox4").html(fourListHtml.join(""))
		$(".emBox5").html(fiveListHtml.join(""))
		$(".emBox6").html(sixListHtml.join(""))
		$(".emBox7").html(sevenListHtml.join(""))
		var mySwiper = new Swiper('.one_silder', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			onSlideNextEnd: function(e) {},
			onSlidePrevEnd: function(e) {}
		})
		//	    ---------------------------------
		//发送信息底部点击
		var emFlag = true;
		var addFlag = true
		//点击表情开关
		$(".emoticon").on("click", function() {
			if(emFlag) {
				$("#sendMessageWrap").height("5.1rem");
				$("#contentBox").height(document.documentElement.clientHeight - $("#sendMessageWrap").height())
				$("#emoticonAll").css("display", "block");
				$("#upBox").css("display", "none")
				emFlag = false;
				addFlag = true
			} else if(addFlag) {
				$("#sendMessageWrap").height("1.1rem")
				$("#contentBox").height(document.documentElement.clientHeight - $("#sendMessageWrap").height())
				$("#emoticonAll").css("display", "none");
				$("#upBox").css("display", "none")
				emFlag = true;
				addFlag = true
			}
		})
		//点击添加开关
		$(".add").on("click", function() {
			if(addFlag) {
				$("#sendMessageWrap").height("5.1rem");
				$("#contentBox").height(document.documentElement.clientHeight - $("#sendMessageWrap").height())
				$("#emoticonAll").css("display", "none");
				$("#upBox").css("display", "block")
				addFlag = false;
				emFlag = true
			} else if(emFlag) {
				$("#sendMessageWrap").height("1.1rem")
				$("#contentBox").height(document.documentElement.clientHeight - $("#sendMessageWrap").height())
				$("#emoticonAll").css("display", "none");
				$("#upBox").css("display", "none")
				emFlag = true;
				addFlag = true
			}
		})
		//获取url 参数
		function getParam(name) {
			var search = document.location.search;
			var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
			var matcher = pattern.exec(search);
			var items = null;
			if(null != matcher) {
				try {
					items = decodeURIComponent(decodeURIComponent(matcher[1]));
				} catch(e) {
					try {
						items = decodeURIComponent(matcher[1]);
					} catch(e) {
						items = matcher[1];
					}
				}
			}
			return items;
		};
		//上传图片
		$(".camera input").on("change", function() {
			var formData = new FormData();
			formData.append("image", document.getElementById("file1").files[0]);
			upImg(formData)
		})
		$(".photo input").on("change", function() {
			var formData = new FormData();
			formData.append("image", document.getElementById("file2").files[0]);
			upImg(formData)
		})

		function upImg(formData) {
			getBase64("https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1476692208,2742622493&fm=5")
			//	    	return
			//	    	$.ajax({
			//	    		url: "https://douboshiapi.xcuniv.com/api/essay/xcximage",
			//	    		type: "POST",
			//	    		data: formData,
			//	    		beforeSend: function(request) {
			//	    			request.setRequestHeader("token", getParam('token'));
			//	    		},
			//	    		contentType: false,
			//	    		processData: false,
			//	    		success: function(data) {
			//	    			console.log(data)
			// 
			//	    			sendImg(data.data.url, "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1476692208,2742622493&fm=5")
			//	    		}
			//	    	});
		}
//		转图片base64
		var imgUrls = ''
		function getBase64(imgUrl) {
			window.URL = window.URL || window.webkitURL;
			var xhr = new XMLHttpRequest();
			xhr.open("get", imgUrl, true);
			// 至关重要
			xhr.responseType = "blob";
			xhr.onload = function() {
				if(this.status == 200) {
					//得到一个blob对象
					var blob = this.response;
					console.log("blob", blob)
					// 至关重要
					let oFileReader = new FileReader();
					oFileReader.onloadend = function(e) {
						let base64 = e.target.result;
						imgUrls = e.target.result;
						sendImg(imgUrl, base64)
					};
					oFileReader.readAsDataURL(blob);
					//====为了在页面显示图片，可以删除====
					var img = document.createElement("img");
					img.onload = function(e) {
						window.URL.revokeObjectURL(img.src); // 清除释放
					};
					let src = window.URL.createObjectURL(blob);
					img.src = src
					document.getElementById("container1").appendChild(img);
					//====为了在页面显示图片，可以删除====
				}
			}
			xhr.send();
		}

		function sendImg(url, base64) {
			/*
     图片转为可以使用 HTML5 的 FileReader 或者 canvas 也可以上传到后台进行转换。

     注意事项：
         1、缩略图必须是 base64 码的 jpg 图。
         2、不带前缀。
         3、大小建议不超过 30。
  */
			var index_first = base64.indexOf(",") + 1
			var newBase = base64.substr(index_first)
			var imageUri = url; // 上传到自己服务器的 URL。
			var msg = new RongIMLib.ImageMessage({
				content: newBase,
				imageUri: imageUri,
			});
			var conversationtype = RongIMLib.ConversationType.PRIVATE; // 单聊,其他会话选择相应的消息类型即可。
			RongIMClient.getInstance().sendMessage(conversationtype, targetId, msg, {
				onSuccess: function(message) {
					//message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
					var newHtml = '<li><div class="avatar_side avatar_self"><img  class="img" src="' + avatarUrl + '" /></div><div class="msg_side msg_self"><div class="img"><img src="' + url + '"/></div></div></li>';
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
		//-------------------------------------------------------------------------------