$(function(){
	var msgid=window.location.search;
	var detailid=msgid.slice(4);
	$.ajax({
		type:"GET",
		url:"http://127.0.0.1:5000/contact/"+detailid, 
		dataType: "json",
		success:function(data){
			$("input[name='first_name']").val(data.first_name);
			$("input[name='last_name']").val(data.last_name);
			$("input[name='mobile']").val(data.mobile);
			$("input[name='address']").val(data.address);
			$("input[name='home']").val(data.home);
			$("input[name='id']").val(data.id);
			$("#editbtn").bind("click",function(){
			window.location.href="editcon.html?id="+data.id;
			return false;
			})	
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
						alert(textStatus);
						}
	})

	$("#delbtn").bind("click",function(){
		$.ajax({
			type:"DELETE",
			url:"http://127.0.0.1:5000/contact/"+detailid, 
			dataType: "json",
			success:function(data){
				alert("删除成功")
				window.location.href="contact.html";
			}
		})	
		return false;
})
})