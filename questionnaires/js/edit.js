$(function(){
	//动态添加序号    重要
	function setQuestionNo(){
		var i = 1;
		$(".questionNo").text("");
		$.each($(".options"),function(){
			$(this).find(".questionNo").text('Q'+(i++));
		})
	};

	//上移、下移、复制、删除按钮
	function setMovebtn(){
		var upward=$("<span class='upward'>上移<span>");
		var downward=$("<span class='downward'>下移<span>");
		var cloneQuestion=$("<span class='clone'>复制<span>");
		var deleteQuestion=$("<span class='delete'>删除<span>");
		$.each($(".options"),function(){
			$(this).append(deleteQuestion).append(cloneQuestion).append(downward).append(upward);
		})
	}
	//下移函数
	function downWard(){
		var Qposition=$(this).parent().next();
		var Qs=$(this).parent();
		Qs.insertAfter(Qposition);
	}
	//上移函数
	function upWard(){
		var Qposition=$(this).parent().prev();
		var Qs=$(this).parent();
		Qs.insertBefore(Qposition);
	}
	//删除
	function deleteQuestion(){
		$(this).parent().remove();
	}
	//克隆
	function cloneQuestion(){
		var cloneQ=$(this).parent().clone("true");
		cloneQ.insertAfter($(this).parent());
	}
	//上移
	$(".optionsWrap").on("click",".downward",downWard).on("click",".downward",setQuestionNo)
	//下移
	$(".optionsWrap").on("click",".upward",upWard).on("click",".upward",setQuestionNo)
	//克隆
	$(".optionsWrap").on("click",".clone",cloneQuestion).on("click",".clone",setQuestionNo)
	//删除
	$(".optionsWrap").on("click",".delete",deleteQuestion).on("click",".delete",setQuestionNo)
	

	//输入问卷标题格式
	$("#qhead").mouseover(function() {
		$(this).addClass('hoverQtitile')
		.mouseout(function(){
		$(this).removeClass('hoverQtitile');
	})
	})
	//???复选框的还没有写，单选框的显示和隐藏只调用一次
	$(".optionsWrap").on("mouseover",".plusWrap",function(){
		$(this).find(".radioplus").show();
		$(this).find(".checkplus").show();
	})
	$(".optionsWrap").on("mouseout",".plusWrap",function(){
		$(this).find(".radioplus").hide();
		$(this).find(".checkplus").hide();
	})
/*
	$(".options").hover(function(){
		$(this).find(".radioplus").show();
		alert("a")
	},function(){
		$(this).find(".radioplus").hide();	
	})	
*/
//叉号添加
	$(".optionsWrap").on("mouseover",".optWrap",function(){
		$(this).find(".delbtn").show();
	})
	$(".optionsWrap").on("mouseout",".optWrap",function(){
		$(this).find(".delbtn").hide();
	})
//叉号绑定函数
	$(".optionsWrap").on("click",".delbtn",deleteQuestion);


	$(".optionsWrap").on("mouseover",".options",function(){
		$(this).addClass('hoverQtitile');
	})

	$(".optionsWrap").on("mouseout",".options",function(){
		$(this).removeClass('hoverQtitile');
	})

	$(":text").focus(function() {
  		$(this).select();
  	})
	$(".optionsWrap").on("focus",":text",function(){
		$(this).select();
	})

	
	$(".addQuestion").click(function() {
		if($(this).prev().is(":visible")){
			$(this).prev().hide();
		}else{
			$(this).prev().show();
		}
	})
	$(".radioBtn").click(function(){
		$(".btn").hide();	
	})
	$(".checkBtn").click(function(){
		$(".btn").hide();	
	})
	$(".txtBtn").click(function(){
		$(".btn").hide();	
	})
	
	//添加单选
	$(".radioBtn").click(function() {
		var j=1;
		var options=$("<div class='options' id='options'></div>")	
		var questionNo=$('<span class="questionNo"></span>');
		var optionTitle=$("<input  class='optionTitle' value='单选题'><br>");
		var radio1=$("<div class='optWrap'><input class='opt' type='radio' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var radio2=$("<div class='optWrap'><input class='opt' type='radio' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var $plus=$("<div class='plusWrap'><span class='radioplus'>+</span><div><br>");
		$(".optionsWrap").append(options);
		$(options).append(questionNo).append(optionTitle).append(radio1).append(radio2).append($plus);
		setMovebtn();
		setQuestionNo();
	})


	//多选题
	$(".checkBtn").click(function(){
		var options=$("<div class='options' id='options'></div>")	
		var questionNo=$('<span class="questionNo"></span>');
		var optionTitle=$("<input  class='optionTitle' value='多选题'><br>");
		var j=1;
		var check1=$("<div class='optWrap'><input class='opt' type='checkbox' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var check2=$("<div class='optWrap'><input class='opt' type='checkbox' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var check3=$("<div class='optWrap'><input class='opt' type='checkbox' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var check4=$("<div class='optWrap'><input class='opt' type='checkbox' disabled='disabled'><input class='choose' type='text' value='选项"+(j++)+"'><span class='delbtn'>X</span></div>");
		var $plus=$("<div class='plusWrap'><span class='checkplus'>+</span></div><br>");
		$(".optionsWrap").append(options);
		$(options).append(questionNo).append(optionTitle).append(check1).append(check2).append(check3).append(check4).append($plus);
		setMovebtn();
		setQuestionNo();
	})

	$(".optionsWrap").on("click",".plusWrap",function(){
		var j=$(this).parent().find(".opt").length;
		if($(this).parent().find(".opt").is(":radio")){
		var radio=$("<div class='optWrap'><input class='opt' type='radio'  disabled='disabled'><input class='choose' type='text' value='选项"+(j+1)+"'><span class='delbtn'>X</span></div>");
		radio.insertBefore($(this));
	}
	else{
		var check=$("<div class='optWrap'><input class='opt' type='checkbox' disabled='disabled'><input class='choose' type='text' value='选项"+(j+1)+"'><span class='delbtn'>X</span></div>");
		check.insertBefore($(this));
		}	
	})


	//文本框
	$(".txtBtn").click(function(){
		var j=1;
		var options=$("<div class='options' id='options'></div>")
		var questionNo=$('<span class="questionNo"></span>');	
		var optionTitle=$("<input  class='optionTitle' value='文本题'><br>");
		var txt1=$("<textarea></textarea><br>")
		var wheRequired=$("<input class='wheRequired' type='checkbox'><span>此选项是否必填</span><br>");
		$(".optionsWrap").append(options);
		$(options).append(questionNo).append(optionTitle).append(txt1).append(wheRequired);
		setMovebtn();
		setQuestionNo();
	})
 $('#selectDate').datepicker({
 	showMonthAfterYear:true, //年在前，月在后
 	 yearSuffix:"年",         //添加后缀年
 	 prevText:"上一月",       //鼠标放在翻月按钮上显示的文字
 	 nextText:"下一月",
 	 monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",],      //以中文显示月份
 	 dayNamesMin:["日","一","二","三","四","五","六",],
 	 dateFormat:"yy-mm-dd"
 }); 
	
 	 
})