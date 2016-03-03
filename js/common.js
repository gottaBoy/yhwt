var isFlag = false;

var remix = {
	json : {
		"name" : "",
		"sDate" : "",
		"eDate" : "",
		"address" : "",
		"city" : ""
	},

	regCompany:{
		"nicheng" : "",
		"name" : "",
		"address" : "",
		"service" : []
	},

	jsonWt : {

	},

	works : {
		"name" : "",
		"price" : ""
	},

	//保存创建艺人的资料
	saveWorks : {
		"name" : "",
		"sex" : "",
		"brith" : "",
		"address" : "",
		"tel" : "",
		"email" : "",
		"height" : "",
		"weight" : "",
		"bust" : "",
		"waist" : "",
		"hipline" : "",
		"intro" : "",
		"role_0" : {
			"role" : "",
			"price" : ""
		},

		"role_1" : {
			"role" : "",
			"price" : ""
		},

		"role_2" : {
			"role" : "",
			"price" : ""
		},

		"role_3" : {
			"role" : "",
			"price" : ""
		},

		"role_4" : {
			"role" : "",
			"price" : ""
		}	
	},

	arr : [], 

	isTrueVal : "",

	init : function(){
		this._render();
	},

	_render : function(){
		var _this = this;
		$(".nextPage").on("click",function(){
			_this.isNull();
		});

		$(".add").on("click",function(){
			_this.showSet();
		});

		$(".close-btn").on("click",function(){
			_this.hideSet();
		});

		$(".save-btn").on("click",function(){
			_this.saveMessage();
		});

		$(".role-mess").on("click",function(){
			$(".role-mess").attr("bClick","false");
			$(document).scrollTop(0);
			_this.showSet(this);
		});

		$(".publish").on("click",function(){
			_this.publish();
		});

		$(".wt-btn").on("click",function(){
			_this.entrust();
		});

		$(".tel").on("blur",function(){
			_this.checkPhone(this);
		});

		$(".act-type span").on("click",function(){
			_this.typeSelcet(this);
		});

		$(".yz").on("click",function(){
			_this.recruited(this);
		});

		$(".refuse").on("click",function(){
			_this.refuse(this);
		});

		$(".close").on("click",function(){
			_this.confirmBox();
		});

		$(".list-type span").on("click",function(){
			_this.spanTab(this);
		});

		$(".create-com").on("click",function(){
			_this.workAdd();
		});

		$(".company-com").on("click",function(){
			_this.comChk();
		});

		$(".rowList").find("span").on("click",function(){
			_this.changeColor(this);
		}),

		_this.getValue();
		_this.getTimer();
		_this.disable();
		_this.isTrue();
		_this.checkNumber();
		_this.initImgList();
	},

	comChk : function(){
		var _this = this;
		_this.regCompany["nicheng"] = $(".nc").val();
		_this.regCompany["name"] = $(".cname").val();
		_this.regCompany["address"] = $(".caddress").val();
		var $service = "";
		var $aList = $(".rowList").find("span");
		for(var i=0; i<$aList.size(); i++){
			if($aList.eq(i).hasClass("active")){
				_this.regCompany["service"].push($aList.eq(i).html());
			}
		}


		if(_this.regCompany["nicheng"] != "" && _this.regCompany["name"] != "" && _this.regCompany["service"] != ""){
			console.log(_this.regCompany["nicheng"] + "|" + _this.regCompany["name"] + "|" + _this.regCompany["address"] + "|" + _this.regCompany["service"]);
			return false;
		}else {
			alert("填写数据不完整！");
		}

	},

	initImgList : function(){
		$(".h-img-list").css("height",$(".h-img-list").width());
	},

	workAdd : function(){
		var _this = this;
		var $name = $(".cname").val();
		var $sex = $(".csex").text();
		var $brith = $(".cbrith").text();
		var $tel = $(".ctel").val();
		var $email = $(".cmail").val();
		var videoList = [];

		if($name == "" || $sex == "" || $brith == "" || $tel == "" || $email == ""){
			alert("*为必填项!");
			return false;
		}

		_this.saveWorks['name'] = $name;
		_this.saveWorks['sex'] = $sex;
		_this.saveWorks['brith'] = $brith;
		_this.saveWorks['address'] = $(".caddress").text();
		_this.saveWorks['tel'] = $tel;
		_this.saveWorks['email'] = $email;
		_this.saveWorks['height'] = $(".cheight").val();
		_this.saveWorks['bust'] = $(".cbust").val();
		_this.saveWorks['waist'] = $(".cwaist").val();
		_this.saveWorks['hipline'] = $(".chipline").val();
		_this.saveWorks['intro'] = $(".cintro").val();
		var $len = $(".rle-A").size();
		for(var i = 0; i < $len; i++){
			if(!$(".rle-A").eq(i).find("div")){
				_this.saveWorks["role_"+i+""]['role'] = "";
				_this.saveWorks["role_"+i+""]['price'] = "";
			}
			
			_this.saveWorks["role_"+i+""]['role'] = $(".rle-A").eq(i).find("div").find("span").eq(0).html();
			_this.saveWorks["role_"+i+""]['price'] = $(".rle-A").eq(i).find("div").find("span").eq(1).html();
		}

		var $vdfinda = $(".videoListAdd").find("a");
		for(var i=0; i<$vdfinda.size(); i++){
			var $vTitle = $vdfinda.eq(i).find("i").eq(0);
			var $vAddress = $vdfinda.eq(i).find("i").eq(1);
			videoList.push({"videoTitle":$vTitle,"videoLink":$vAddress});
		}
		
		//videoList存放的是上传视频的标题和地址
		console.log(videoList);
		console.log(_this.saveWorks["role_0"]['role'] + " | "+_this.saveWorks["role_0"]['price']);
	},

	spanTab : function(obj){
		var $obj = $(obj);
		$(".list-type span").removeClass("active");
		$obj.addClass("active");
	},

	isTrue : function(){
		$(".confirm-btn").on("click",function(){
			if($(this).html() == "确定"){
				$(".mask").hide();
				$(".comfirm").hide();
				return isTrueVal = true;
			} else {
				$(".mask").hide();
				$(".comfirm").hide();
				return isTrueVal = false;
			}
		});
	},

	checkNumber : function(){
		var _this = this;
		$(".perNum").on("blur",function(){
			_this.checkNum(this);
		});

		$(".yen").on("blur",function(){
			_this.checkNum(this);
		});

		$(".activeNumber").on("blur",function(){
			_this.checkNum(this);
		});
	},

	checkNum : function(obj){
		var $obj = $(obj);
		if($obj.val() != ""){

			if($obj.val() <= 0){
				alert("不能输入小于或为0的数");
				$obj.val("");
			}

		}
	},

	confirmBox : function(){
		$(".mask").show();
		$(".comfirm").show();
	},

	recruited : function(obj){
		var $obj = $(obj);
		$obj.html("等待");
	},

	refuse : function(obj){
		var $obj = $(obj);
		$obj.addClass("disable");
		$obj.off("click");
		console.log("解除绑定");
	},

	typeSelcet : function(obj){
		var $obj = $(obj);
		$(".act-type span").removeClass("active");
		$obj.addClass("active");
	},

	rnd : function(n,m){
		return parseInt(Math.random()*(m-n)+n);
	},

	disable : function(){
		var $oDisable = $(".refuse");
		for(var i = 0; i < $oDisable.size(); i++){
			if($oDisable.eq(i).hasClass("disable")){
				$oDisable.eq(i).off("click");
			}
		}
	},

	isNull : function(){
		var _this = this;
		var $val1 = $("#x-name").val();
		var $val2 = $("#s-date").text();
		var $val3 = $("#e-date").text();
		var $val4 = $("#x-address").val();
		var $val5 = $("#showCityPicker3").text();
		var $val6 = $("#e-date2").text();

		if($val1 != "" && $val2 != "" && $val3 != "" && $val4 != ""){
			localStorage.aname = $val1;
			localStorage.sDate = $val2;
			localStorage.eDate = $val3;
			localStorage.address = $val4;
			localStorage.city = $val5;
			localStorage.yzDate = $val6;
			window.location.href="task-2.html";
		} else {
			alert("*为必填项！");
		}
	},

	addSpan : function(obj){
		var $obj = $(obj);
		$obj.attr("bClick","true");
		var _this = this;
		for(var i = 0; i < role.length; i++){
			var $val = role[i]["role"];
			var $span = $("<span>");
			$span.html($val);	
			$(".t1").append($span);
		}


		!isFlag && actioned(_this); 

		function actioned (th) {
			isFlag = true;
			var _this = th;

			$(document).on("touchstart",".t1 span",function(){
				_this.changeColor(this);
			});

			$(".create-btn").on("click",function($obj){
				var $size = $(".role-a").find("span").size();
				var temporary = "";
				for(var i = 0; i < $size; i++){
					if($(".role-a").find("span").eq(i).hasClass("active")){
						temporary = $(".role-a").find("span").eq(i).html();
						if(temporary == "其他"){
							if($(".ourset").val() == ""){
								alert("请填写自定义项!");
								return false;
							} else {
								_this.works['name'] = $(".ourset").val();
							}
						} else {
							if($(".ourset").val() != ""){
								_this.works['name'] = $(".ourset").val();
							} else {
								_this.works['name'] = temporary;
							}
						}
					} else{
						if($(".ourset").val() != ""){
							_this.works['name'] = $(".ourset").val();
						}
					} 
				}

				_this.works['price'] = $(".yen").val() + '元/' +$(".ptype").val();
				//console.log(_this.works['name'] + " | " + _this.works['price']);
				var $html = '<div><span>'+_this.works['name']+'</span> <span>'+_this.works['price']+'</span></div>';

				var $len = $(".role-mess").size();
				for(var j = 0; j < $len; j++){
					if($(".role-mess").eq(j).attr("bClick") == "true"){
						if(($(".yen").val()!="" && $(".ptype").val() !="") && ($(".ourset").val() != "" ||  _this.works['name']!="")){
							$(".role-mess").eq(j).html($html);
						}else{
							alert("信息填写不完整");
							return false;
						}
					}
				}

				_this.hideSet();
			});
		}
	},

	showSet : function(obj){
		var $obj = $(obj);
		var _this = this;
		$(".mask").show();
		$(".popbox").show();
		$(".t1").html("");

		_this.addSpan($obj);
	},

	hideSet : function(){
		$(".mask").hide();
		$(".popbox").hide();
		$(".t2").hide();
		$(".t3").hide();
	},

	changeColor : function(obj){
		var _this = this;
		var $obj = $(obj);
		$(".t1 span").removeClass("active");
		$obj.addClass("active");
		$(".t2").show();
		$(".t2").html("");
		for(var i = 0; i < role.length; i++){
			if(role[i]["role"] == $obj.html()){
				for(var k in role[i]["rList"]){
					var $val = k;
					var $span = $("<span>");
					$span.html($val);	
					$(".t2").append($span);
				}
			}
		}

		_this.isSelect();

		$(".t2 span").on("click",function(){
			_this.t3Hide(this);
		});
	},

	isSelect : function(){
		var $spanSelect = $(".role-a").find("span");
		for(var i = 0; i < $spanSelect.size(); i++){
			if($spanSelect.eq(i).hasClass("active")){
				if($spanSelect.eq(i).html() == "其他"){
					$(".ourset").attr("disabled",false);
				}
			} else {
				$(".ourset").attr("disabled",true);
				$(".ourset").val("");
			}
		}
	},

	t3Hide : function(obj){
		var _this = this;
		var $obj = $(obj);
		$(".t2 span").removeClass("active");
		$obj.addClass("active");
		$(".t3").show();
		$(".t3").html("");
		for(var i = 0; i < role.length; i++){
			for(var k in role[i]["rList"]){
				if($obj.html() == k){
					for(var x = 0; x < role[i]["rList"][k].length; x++){
						var $val = role[i]["rList"][k][x];
						var $span = $("<span>");
						$span.html($val);	
						$(".t3").append($span);
					}
				}
			}
		}

		_this.isSelect();

		$(".t3 span").on("click",function(){
			$(".t3 span").removeClass("active");
			$(this).addClass("active");
			_this.isSelect();
		});
	},

	saveMessage : function(){
		var _this = this;
		var $span = $(".role-a div span");
		var $ourTxt = "";
		
		// console.log($ourTxt);
		var $aTxt = $(".ourset").val();
		$aTxt = $aTxt.replace(/(^\s*)/g, "");
		var $roleVal1;

		// if($ourTxt == "其他"){
		// 	//console.log($ourTxt);
		// 	if($aTxt == ""){
		// 		alert("请填写自定义项！");
		// 		return false;
		// 	}
		// } else {
		// 	if($aTxt == ""){
		// 		$roleVal1 = $ourTxt;
		// 	} else {
		// 		$roleVal1 = $aTxt;
		// 	}
		// }

		var $s1 = $(".t1").find("span");
		var $s2 = $(".t2").find("span");
		var $s3 = $(".t3").find("span");
		var $role_TXT1 = "";
		var $role_TXT2 = "";
		var $role_TXT3 = "";
		var $bFlag = $v1 = $v2 = $v3 = false;
		
		for(var i = 0; i < $s1.size(); i++){
			if($s1.eq(i).hasClass("active")){
				$v1 = true;
				$role_TXT1 = $s1.eq(i).html();
			}
		}

		for(var i = 0; i < $s2.size(); i++){
			if($s2.eq(i).hasClass("active")){
				$v2 = true;
				$role_TXT2 = $s2.eq(i).html();
			}
		}

		for(var i = 0; i < $s3.size(); i++){
			if($s3.eq(i).hasClass("active")){
				$v3 = true;
				$role_TXT3 = $s3.eq(i).html();
			}
		}

		if($v1 && $v2 && $v3){
			$bFlag = true;
		}

		if($aTxt == ""){
			$ourTxt = $role_TXT1 + " " + $role_TXT2 + " " + $role_TXT3;
			$roleVal1 = $ourTxt;
		} else {

			if($role_TXT2 == "其它"){
				$ourTxt = $role_TXT1 + " " + $aTxt;
			} else {
				$ourTxt = $role_TXT1 + " " + $role_TXT2 + " " + $aTxt;
			}

			$roleVal1 = $ourTxt;
		}

		var $roleVal2 = $("#showUserPicker").text();
		var $roleVal3 = $(".perNum").val();
		var $roleVal4 = $(".yen").val();
		var $roleVal5 = $(".bz-1").val();

		if($roleVal3 != "" && $roleVal4 != "" && $bFlag){
			if($aTxt == ""){
				var html = '<table width="100%" id="tab'+_this.rnd(1,100)+_this.rnd(1,500000)+'" cellpadding="0" cellspacing="0" border="0"><tr><td width="20%" align="right">角色：</td><td width="30%" class="r1" roleName=true roleDesc=false>'+$roleVal1+'</td><td width="20%" align="right">性别：</td><td width="30%" class="r2">'+$roleVal2+'</td></tr><tr><td width="15%" align="right">人数：</td><td width="35%" class="r3">'+$roleVal3+'</td><td width="20%" align="right">预算：</td><td width="30%" class="r4">'+$roleVal3*parseFloat($roleVal4)+'</td></tr><tr><td width="15%" align="right" valign="top">备注：</td><td width="85%" colspan="3" class="pr20 mar0 r5">'+$roleVal5+'</td></tr></table>';
			} else {
				var html = '<table width="100%" id="tab'+_this.rnd(1,100)+_this.rnd(1,500000)+'" cellpadding="0" cellspacing="0" border="0"><tr><td width="20%" align="right">角色：</td><td width="30%" class="r1" roleName=false roleDesc=true>'+$roleVal1+'</td><td width="20%" align="right">性别：</td><td width="30%" class="r2">'+$roleVal2+'</td></tr><tr><td width="15%" align="right">人数：</td><td width="35%" class="r3">'+$roleVal3+'</td><td width="20%" align="right">预算：</td><td width="30%" class="r4">'+$roleVal3*parseFloat($roleVal4)+'</td></tr><tr><td width="15%" align="right" valign="top">备注：</td><td width="85%" colspan="3" class="pr20 mar0 r5">'+$roleVal5+'</td></tr></table>';
			}
			
			$(".role").append(html);
			_this.hideSet();
		} else {
			if($bFlag){
				alert("*为必填项！");
			} else {
				alert("角色信息填写不完整！");
			}
		}
	},

	publish : function(){
		var _this = this;
		var $tab = $(".role").find("table");
		for(var i = 0; i < $tab.size(); i++){
			_this.arr.push({
				"id" : $tab.eq(i).attr("id"),
				"role" : $tab.eq(i).find(".r1").html(),
				"sex" : $tab.eq(i).find(".r2").html(),
				"perNum" : $tab.eq(i).find(".r3").html(),
				"total" : $tab.eq(i).find(".r4").html(),
				"bz" : $tab.eq(i).find(".r5").html()
			});
		}
		console.log(_this.arr); //返回值第2步
		console.log(localStorage.aname + ","+localStorage.sDate+","+localStorage.eDate+","+localStorage.address + ","+localStorage.city + ","+ localStorage.yzDate);//返回值第1步
		//window.location.href = "entrust.html";
	},

	entrust : function(){
		var _this = this;
		var $m4;
		var $Spn = $(".act-type span");
		for(var i = 0; i < $Spn.size(); i++){
			if($Spn.eq(i).hasClass("active")){
				$m4 = $Spn.eq(i).html();
			}
		}
		var $m1 = $(".activeName").val();
		var $m2 = $("#demo1").text();
		var $m10 = $("#demo2").text();
		var $m3 = $(".shichang").val();
		
		var $m5 = $(".activeTotal").val();
		var $m6 = $(".activeNumber").val();
		var $m7 = $(".tel").val();
		var $m8 = $(".bz-2").val();
		var $m9 = $(".province-1").val()+","+$(".city-1").val()+","+$(".area-1").val();

		if($m1 != "" && $m2 != "" && $m5 != "" && $m7 != ""){
			_this.jsonWt["name"] = $m1;
			_this.jsonWt["sDate"] = $m2;
			_this.jsonWt["eDate"] = $m10;
			_this.jsonWt["sc"] = $m3;
			_this.jsonWt["type"] = $m4;
			_this.jsonWt["total"] = $m5;
			_this.jsonWt["number"] = $m6;
			_this.jsonWt["tel"] = $m7;
			_this.jsonWt["beizhu"] = $m8;
			_this.jsonWt["address"] = $m9;
		} else {
			alert("*为必填项！");
		}

		console.log(JSON.stringify(_this.jsonWt));
	},

	checkPhone : function(obj){
		var $obj = $(obj);
		if($obj.val() != ""){

			if (!/^1[3578][0-9]{9}$/.test($obj.val())) {
	            alert("请输入正确的手机号码！");
	            $obj.val(""); 
	        }

		}
	},

	getValue : function(){
		setInterval(function(){
			 $("#s-date").val($("#date-x1").val());
			 $("#e-date").val($("#date-x2").val());
		},30);
	},

	getTimer : function(){
		setInterval(function(){
			$(".activeTime").val($(".time-x").val());
		},30);
	},

	personNav : function(){
		var $sec_as = $(".sec_list").find("aside");
		var $width = $sec_as.eq(0).width();
		for(var i=0; i<$sec_as.size(); i++){
			$sec_as.eq(i).css("height",$width);
		}

		var $height = $(".sec_list").height();
		var $width = $(".sec_list").width();
		var $screenWidth = $(window).width();
		var $screenHeight = $(window).height(); 
		$(".sec_list").css({position:"relative",left:Math.round(($screenWidth-$width)/2) ,top:Math.round(($screenHeight-$height)/2)});
	}


};


var effects = {
	artUlHeight : $("#artistList").find("ul").eq(0).outerHeight(),
	artFlag : false,

	init : function(){
		this.render();
	},

	render : function(){
		var _this = this;
		$(".telescopic").on("click",function(){
			_this.telescopic();
		});

		$(".vlAdd").on("click",function(){
			_this.addVideoList();
		});

		_this.bgAutoHeight();
	},

	telescopic : function(){
		var $aLi = $("#artistList").find("li").eq(0).outerHeight();
		if(effects.artFlag){
			$(".telescopic").html("点击收缩");
			$("#artistList ul").animate({height:effects.artUlHeight});
			effects.artFlag = false;
		} else {
			$(".telescopic").html("点击展开");
			$("#artistList ul").animate({height:$aLi*3});
			effects.artFlag = true;
		}
	},

	bgAutoHeight : function(){
		var $imgWidth = $(".art-tab-img").width();
		$(".art-tab-img").css("height",$imgWidth*0.66);
	},

	addVideoList : function(){
		var $vtitle = $(".videoTitle").val();
		var $vAddress = $(".videoAddress").val();
		var $contentHtml = $(".videoListAdd").html();
		if($vtitle!="" && $vAddress!=""){
			$contentHtml += '<a href="javascript:void(0);"><em></em><span><i>'+$vtitle+'</i><i>'+$vAddress+'</i></span><div></div></a>';
			$(".videoListAdd").html($contentHtml);
			$(".videoAddress").val("");
			$(".videoTitle").val("");
		} else{
			alert("请将视频标题和视频地址填写完整!");
		}
	}
};

effects.init();
remix.init();