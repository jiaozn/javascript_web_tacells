$(function() {
	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this);

		$this.wrap($("<div/>", {
			style: 'position:relative'
		}));
		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
			style: 'position:absolute;right:10px;top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%);-o-transform:translate(0,-50%);padding: 2px 7px;font-size:12px;cursor:pointer;'
		}));
		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));
		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

});

function loginsubmit(){
	var susername=$('#name').val();
	var spassword=$('#password').val();
	var b = new Base64();
	var bup=b.encode(susername+':'+spassword);
	var tok="Basic "+bup; 

	$('#hheader').text(tok);
	$.cookie('bup',bup);
	$.cookie('tok',tok);
	alert(tok);
	$.ajax({
		type: "POST",
		url: "/api/isuser",
		dataType: 'json',
		async: true,
		headers: {
		  "Authorization": tok
		},
		data: {name:susername,
		password:spassword},
		success: function (){
		  alert('Thanks for your comment!');
		  window.location.href = '/showcells';
		}
	  });
	// document.getElementById("loginform").submit();
	console.log('try submit end');
	return false;
}