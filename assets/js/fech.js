$(document).ready(function () {
	tampil_buku();
	tampil_tabel();

	function tampil_buku() {
		$.ajax({
			type: "ajax",
			url: "http://localhost/ci/api/book",
			async: true,
			dataType: "json",
			contentType: 'application/json',
			headers: {
				'api-key': 'myKey'
			},
			success: function (data) {
				$('#judul').text(data.data[0].judul);
			}
		})
	}

	function tampil_tabel() {
		// alert('hi');
		return $('#mydata').DataTable({
			"pagingType": "full_numbers",
			"lengthMenu": [
				[10, 25, 50, -1],
				[10, 25, 50, "All"]
			],
			responsive: true,
			language: {
				search: "_INPUT_",
				searchPlaceholder: "Search records",
			}
		});
	}
});
