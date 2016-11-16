$(function(){

	$.ajax({
		type:"GET",
		url:"http://127.0.0.1:5000/contacts", 
		dataType: "json",
		success:function(data){
			var html="";
			var contacts=data.contacts;
			$.each(contacts,function(i,val){

				html+="<li class='indexLetter list-group-item list-group-item-warning'>"+i+"</li><table class='table table-hover'><tbody name='"+i+"'>";
				for(j=0;j<val.length;j++){
					html+="<tr id='"+val[j].id+"'><td class='col-xs-6'>"+val[j].name+"</td><td class='col-xs-6'>"+val[j].mobile+"</td></tr>"			
				}
				html+="</tbody></table>"
			})
			$(".showmsg").html(html);
			$("tr").on("click",function(){
				var msgid=$(this).attr("id");
				window.location.href="detailcon.html?id="+msgid;	
			})	
		}
	})



	$('.seek').bind("keyup submit",function() {
		var seekname=$(".seekname").val();
		if(seekname==""){
			$(".seekresl").html("");
			window.location.href="contact.html"
			return false;
		}
		$(".showmsg").html("")
		$(".seekresl").html("");
		$.ajax({
			type:"GET",
			url:"http://127.0.0.1:5000/contacts",
			dataType: "json",
			success:function(data){
				var text="";
				var contacts=data.contacts;
				$.each(contacts,function(i,val){
					for(j=0;j<val.length;j++){
						if(val[j].name.indexOf(seekname)>=0||val[j].mobile.indexOf(seekname)>=0){
							text+="<table class='showmsg table table-hover'><tbody name='"+i+"'><tr><td>"+val[j].name+"</td><td>"+val[j].mobile+"</td></tr></tbody></table>"	}
					}	
				})
			if(text==""){
					$(".seekresl").html("<tr><td>您查找的信息不存在，快来新建联系人吧</td></tr>")
				}else{
					$(".seekresl").html(text);
				}	
			}
		})	
		return false;
	})
})

