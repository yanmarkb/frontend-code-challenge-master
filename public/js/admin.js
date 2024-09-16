// public/js/admin.js

$(document).ready(function () {
	$.ajax({
		url: "/users",
		type: "GET",
		success: function (users) {
			const tbody = $("#users-table tbody");
			users.forEach(function (user) {
				const row = `
            <tr>
              <td>${user.id}</td>
              <td>${user.email}</td>
              <td>${user.firstName || ""}</td>
              <td>${user.lastName || ""}</td>
              <td>${user.state}</td>
            </tr>
          `;
				tbody.append(row);
			});
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("Error fetching users:", textStatus, errorThrown);
		},
	});
});
