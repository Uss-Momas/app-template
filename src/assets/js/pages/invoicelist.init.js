$(function () {
  var searchHTML = '<div class="search-box d-inline-flex">' +
    '<div class="position-relative">' +
    '<input type="text" placeholder="Search..." class="form-control ms-0 form-control-sm" aria-controls="view_invoice_list">' +
    '<i class="bx bx-search icon"></i>' +
    '</div>' +
    '</div>'
  var table = $('#view_invoice_list').DataTable({
    dom: '<"row" <"col-md-6" <"html5buttons"B>> <"col-md-6" f > >' +
      '<"row" <"col-12"Tgt>> <"row align-items-center" <"col-md-6"li> <"col-md-6"p> >',
    "lengthChange": false,
    "buttons": [
      { extend: 'copy', className: 'btn-info' },
      { extend: 'excel', className: 'btn-info' },
      { extend: 'pdf', className: 'btn-info' }
    ],
    "language": {
      "paginate": {
        "previous": "<i class='bx bx-chevron-left'>",
        "next": "<i class='bx bx-chevron-right'>",
      }
    },
    "order": [],
    "columnDefs": [
      { "targets": [0, 3, 4, 6], "orderable": false }
    ],
    "drawCallback": function () {
      $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination ');
      $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
      $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
    }
  });
}(jQuery));