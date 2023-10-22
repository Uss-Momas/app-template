(function ($) {
  $("#products-table").DataTable({
    language: {
      paginate: {
        "previous": "<i class='bx bx-chevron-left'>",
        "next": "<i class='bx bx-chevron-right'>",
      },
      info: "Showing customers _START_ to _END_ of _TOTAL_",
      lengthMenu:
        "Display <select class='form-select form-select-sm ms-1 me-1'>" +
        '<option value="10">10</option>' +
        '<option value="20">20</option>' +
        '<option value="50">50</option>' +
        '<option value="100">100</option>' +
        '<option value="-1">All</option>' +
        "</select> customers"
    },
    pageLength: 10,
    dom: '<"row align-items-center" <"col-sm-4" l> <"col-sm-8" <"d-flex align-items-center justify-content-sm-end flex-wrap" f<"ms-0 ms-sm-3" B>>> >' +
      '<"row" <"col-12"Tgt>> <"row align-items-center" <"col-md-6"i> <"col-md-6"p> >',

    columns: [
      {
        orderable: false,
        "targets": 0,
        render: function (data, type, row, meta) {
          if (type === "display") {
            data =
              '<div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>';
          }
          return data;
        },
        checkboxes: {
          selectRow: false,
          selectAllRender:
            '<div class="form-check custom-checkbox"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>'
        }
      },
      {
        orderable: false,
        "targets": 1
      },
      {
        orderable: true,
        "targets": 2
      },
      {
        orderable: true,
        "targets": 3
      },
      {
        orderable: true,
        "targets": 4
      },
      {
        orderable: true,
        "targets": 5
      },
      {
        orderable: false,
        "targets": 6
      },
      {
        orderable: true,
        "targets": 7
      },
      {
        orderable: false,
        "targets": 8
      },
      {
        orderable: false,
        "targets": 9
      }
    ],
    "buttons": [
      {
        extend: 'excel',
        text: '<i class="mdi mdi-file-excel me-1"></i>Excel',
        className: "btn-info"
      }, {
        extend: 'pdf',
        text: '<i class="mdi mdi-file-pdf me-1"></i>PDF',
        className: "btn-info"
      }],
    order: [],
    "drawCallback": function () {
      $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination ');
      $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
      $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
    }
  });
}(jQuery))