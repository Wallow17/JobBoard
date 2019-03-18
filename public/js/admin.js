$("document").ready(function () {
	$("#add_form button").click(function (e) {
		var form = {
			"name": $("#add_form #name").val(),
			"company_id": $("#add_form #company_id").val(),
			"wage": $("#add_form #wage").val(),
			"place": $("#add_form #place").val(),
			"duration": $("#add_form #duration").val(),
			"resume": $("#add_form #resume").val(),
			"description": $("#add_form #description").val(),
			"admin_id": "0"
		};
		alert(JSON.stringify(form));
		$.ajax({
			type: "POST",
			url: "/api",
			data: JSON.stringify(form),
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


	$("#remove_form button").click(function (e) {
		var form = {
			"id": $("#remove_form select").val(),
		};
		alert(JSON.stringify(form));
		$.ajax({
			type: "DELETE",
			url: "/api",
			data: JSON.stringify(form),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				alert(data.message);
				if (data.result == 'OK') {
					window.location.href = "/";
				}
			},
			error: function (xhr) {
				alert("Error");
			}
		});
		e.preventDefault();
	});


	$('#modify_row').hide();
	$('#modify_form select').change(function(){
		var form = {
			"id": $("#modify_form select").val(),
		};
		$.ajax({
			type: "POST",
			url: "/getOneAd",
			data: JSON.stringify(form),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				var arr = [];
				for (var prop in data) {
					arr.push(data[prop]);
				}
				$("#modify_form #name").val($.map(arr, function(el, i) { return el["name"] }));
				$("#modify_form #company_id").val($.map(arr, function(el, i) { return el["company_id"] }));
				$("#modify_form #wage").val($.map(arr, function(el, i) { return el["wage"] }));
				$("#modify_form #place").val($.map(arr, function(el, i) { return el["place"] }));
				$("#modify_form #duration").val($.map(arr, function(el, i) { return el["duration"] }));
				$("#modify_form #resume").val($.map(arr, function(el, i) { return el["resume"] }));
				$("#modify_form #description").val($.map(arr, function(el, i) { return el["description"] }));
			},
			error: function (xhr) {
				alert("Error");
			}
		});
		$('#modify_row').show();
	});
	$("#modify_form button").click(function (e) {
		var form = {
			"id": $("#modify_form select").val(),
			"name": $("#modify_form #name").val(),
			"company_id": $("#modify_form #company_id").val(),
			"wage": $("#modify_form #wage").val(),
			"place": $("#modify_form #place").val(),
			"duration": $("#modify_form #duration").val(),
			"resume": $("#modify_form #resume").val(),
			"description": $("#modify_form #description").val()
		};
		alert(JSON.stringify(form));
		$.ajax({
			type: "PUT",
			url: "/api",
			data: JSON.stringify(form),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				alert(JSON.stringify(data.message));
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