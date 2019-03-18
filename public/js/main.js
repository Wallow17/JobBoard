$("document").ready(function () {
	$('.sidenav').sidenav();
	$('#login').webuiPopover({
		url: '#login-form'
	});
	$('.modal').modal();
	$('.tabs').tabs();
	$('select').formSelect();
	$("button#login").click(function (e) {
		var userLogin = {
			"connect_id": $("#login_username").val(),
			"connect_pwd": $("#login_password").val()
		};
		$.ajax({
			type: "POST",
			url: "/login",
			data: JSON.stringify(userLogin),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				alert(data.message);
				if (data.result == 'OK')
						window.location.href = "/";
			},
			error: function (xhr) {
				alert("Error");
			}
		});
		e.preventDefault();
	});
	$("button#logout").click(function (e) {
		$.ajax({
			type: "GET",
			url: "/logout",
			success: function (data) {
				alert(data.message);
				if (data.result == 'OK')
						window.location.href = "/";
			},
			error: function (xhr) {
				alert("Error");
			}
		});
		e.preventDefault();
	});
	$(".modal button").click(function (e) {
		var applyForm = {
			"firstname": $("#firstname").val(),
			"lastname": $("#lastname").val(),
			"email": $("#email").val(),
			"phone": $("#phone").val(),
			"content": $("#message").val(),
			"ad_id": $("#button").val()
		}
		$.ajax({
			type: "POST",
			url: "/apply",
			data: JSON.stringify(applyForm),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				alert(data.message);
				if (data.result == 'OK')
					window.location.href = "/";
			},
			error: function (xhr) {
				alert("Error");
			}
		});
		e.preventDefault();
	});
});