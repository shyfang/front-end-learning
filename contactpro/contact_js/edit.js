$(function(){
	var editagument=window.location.search;
	var editid=editagument.slice(4);
		$.ajax({
		type:"GET",
		url:"http://127.0.0.1:5000/contact/"+editid, 
		dataType: "json",
		success:function(data){
			$("input[name='first_name']").val(data.first_name);
			$("input[name='last_name']").val(data.last_name);
			$("input[name='mobile']").val(data.mobile);
			$("input[name='address']").val(data.address);
			$("input[name='home']").val(data.home);
			$("input[name='id']").val(data.id);
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
						alert(textStatus);
						}

	})	

	$("#renewbtn").bind("click",function(){
		var first_name=$("input[name='first_name']").val();
		var last_name=$("input[name='last_name']").val();
		var mobile=$("input[name='mobile']").val();
		var address=$("input[name='address']").val();
		var home=$("input[name='home']").val();
		$.ajax({
			type:"PATCH",
			url:"http://127.0.0.1:5000/contact/"+editid, 
			dataType: "json",
			data:{
				"first_name":first_name,
				"last_name":last_name,
				"mobile":mobile,
				"address":address,
				"home":home,
				"id":editid
			},
			success:function(data){
				alert("更新成功");
				window.location.href="contact.html";
				
			},
			error:function(XMLHttpRequest,textStatus,errorThrown){
						alert(textStatus);
						}
		})	
return false;
	})
	$("#deledit").bind("click",function(){
		window.location.href="detailcon.html?id="+editid
	})


	})