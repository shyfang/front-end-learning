
$(function(){
	// 点击翻转函数
	function turn(elem){
		var cls=$(elem).attr("class")
		var n=$(elem).attr("id").split("_")[1];

		if( /photo_front/.test(cls)){
			$(elem).attr("class","photo  photo_center photo_back");
			$("#btn_"+n).addClass(" i_back")
		}else{
			$(elem).attr("class","photo  photo_center photo_front");
			$("#btn_"+n).removeClass(" i_back")
		}
	}

	
	function rem(){
		$.each($(".photo"),function(){
			$(this).removeClass(" photo_center");	
		})
	}	

	//为nav添加i个按钮<span class=i></span>
	for(var m=0;m<$(".photo").length;m++){
		var btn=$("<span class='i' id='btn_"+m+"'></span>")
		$(".nav").append(btn);
		/*$("#btn"+m).click(function(){
		$(this).addClass("i_current");

		})*/
	}

// 如果按钮对应图片是当前展示图片就进行rsort(n)展示，n为对应按钮序号，对应图片序号；
// 如果按钮对应图片是当前展示图片就进行翻转；
	function btnRotate(elem){
		var n = $(elem).attr("id").split("_")[1];
		var photoRotate=$("#photo_"+n);
		var cls=$(elem).attr("class");
		if(/i_current/.test(cls)){
			turn(photoRotate);
		}else{
			rsort(n);
		}
		
	}

	$.each($(".i"),function(){
		$(this).click(	function(){
		var n = $(this).attr("id").split("_")[1];
		var photoRotate=$("#photo_"+n);
		var cls=$(this).attr("class");
		if(/i_current/.test(cls)){
			turn(photoRotate);
		}else{
			rsort(n);
		}	
	})
	})




//随机生成一个值
	function random(range){
		var min=Math.min(range[0],range[1]);
		var max=Math.max(range[0],range[1]);
		var diff=max-min;
		var number=Math.floor(Math.random()*diff+min);
		return number;
	}

	//range函数计算左右分区的范围{left:{x:[],y[]},right:{x:[],y[]}}


// 海报排序，随意点一个海报，设置为当前展现；控制按钮，展现对应海报；第一次排序时随机选中一张水平居中
	function rsort(n){
	/*	var photo_center=$(".photo").get(n);	
		photo_center.className+=" photo_center";*/
		// 将所有的图片取消选中展示状态
		var photos=$(".photo");
			$.each(photos,function(){
				$(this).removeClass(" photo_center");
				$(this).removeClass(" photo_back");
			})
	
		// 随机选择一张作为选中展示状态
		var photo_center=$(".photo").eq(n);//bug，alert(photo_center.html())好几个photo元素
		photo_center[0].style.left="";
		photo_center[0].style.top="";
		photo_center[0].style.transform='rotate(0deg)'
		var cls=photo_center.addClass(' photo_center');//bug,图片样式设置展示状态被覆盖，F12调试，要进行以上清空样式
	/*	cls+=" photo_center";
		photo_center.attr("class",cls);*/
		$(".i").removeClass(" i_current");
		$(".i").removeClass(" i_back");
		$("#btn_"+n).addClass(" i_current");

		// 取出除了展示状态的元素，将剩余元素分成左右两部分
		var _photos=$(".photo").not($(".photo").eq(n));
		var photos_left=_photos.splice(0,Math.ceil(_photos.length/2))
		// 区分数组对象中的方法，slice和splice
		var photos_right=_photos;

		for(s in photos_left){
			var photo=photos_left[s];
			photo.style.left=random([-160,450])+"px";//随机范围，计算左右分区的范围
			photo.style.top=random([-200,600])+"px";
			$(photo).css('-moz-transform','rotate('+random([-45,90])+'deg)');
			$(photo).css('-webkit-transform','rotate('+random([-45,90])+'deg)');
		}
/*		for(m in photos_right){
			var photo=photos_right[m];
			photo.style.left=random([600,1000])+"px";//随机范围，计算左右分区的范围
			photo.style.top=random([-200,600])+"px";//未找到原因为什么不执行，所以换用了forz循环
		}*/
		for(m=0;m<photos_right.length;m++){
			var photo=photos_right[m]
			$(photo).css({"left":random([700,1450])+"px",
							"top":random([700,1450])+"px"})
			photo.style.left=random([700,1450])+"px";
			photo.style.top=random([-100,600])+"px";
			$(photo).css('-moz-transform','rotate('+random([-45,90])+'deg)');
			$(photo).css('-webkit-transform','rotate('+random([-45,90])+'deg)');
		}
	}
	// 图片点击翻转
		rsort(random([0,$(".photo").length-1]));
		/*$(".photo_center").click(function(){
			$(this).click(turn($(this)));
		})*/

		$.each($(".photo"),function(){
			$(this).click(	function(){
			var n = $(this).attr("id").split("_")[1];
			// var photoRotate=$("#photo_"+n);
			var cls=$(this).attr("class");
			if(/photo_center/.test(cls)){
				turn($(this));
			}else{
				rsort(n);
			}	
			})
		})

	})

