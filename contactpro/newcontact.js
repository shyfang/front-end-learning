$(function(){
	
	$("#savebtn").bind("click",function(){
		var first_name=$("input[name='first_name']").val();
		var last_name=$("input[name='last_name']").val();
		var mobile=$("input[name='mobile']").val();
		var address=$("input[name='address']").val();
		var home=$("input[name='home']").val();


		$.ajax({
			type:"POST",
			url:"http://127.0.0.1:5000/contact/add", 
			dataType: "json",
			data:{
				"first_name":first_name,
				"last_name":last_name,
				"mobile":mobile,
				"address":address,
				"home":home
			},
			success:function(data){
				alert("保存成功");
				window.location.href="contact.html";
			}
		})	
		return false;
	})

				
})