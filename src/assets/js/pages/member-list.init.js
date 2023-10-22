(function ($) {
  $('#view_contact_list').DataTable({
    "language": {
      "paginate": {
        "previous": "<i class='bx bx-chevron-left'>",
        "next": "<i class='bx bx-chevron-right'>"
      }
    },
    "ordering": false,
    "info": true,
    "lengthChange": false,
    "drawCallback": function () {
      $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination justify-content-end');
      $('.dataTables_paginate > .pagination .page-link').addClass("waves-effect waves-light");
      $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative");
      $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...");
    }
  });
}(jQuery))