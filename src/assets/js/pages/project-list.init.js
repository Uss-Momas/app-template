(function ($) {
  $('#view_project_list').DataTable({
    "language": {
      "paginate": {
        "previous": "<i class='bx bx-chevron-left'>",
        "next": "<i class='bx bx-chevron-right'>"
      }
    },
    "order": [],
    "columnDefs": [
      { "targets": [0, 6], "orderable": false }
    ],
    "drawCallback": function () {
      $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination ');
      $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative");
      $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...");
    }
  });
}(jQuery));