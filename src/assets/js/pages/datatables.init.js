$(document).ready(function() {

    // Default Datatable
    $('#basic-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'print', 'pdf', 'excel', 'csv'],
        buttons: [
            { extend: 'copy', className: 'btn-light' },
            { extend: 'print', className: 'btn-light' },
            { extend: 'pdf', className: 'btn-light' },
            { extend: 'excel', className: 'btn-light' },
            { extend: 'csv', className: 'btn-light' },
        ],
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        },
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    // Key Datatable
    $('#key-datatable').DataTable({
        keys: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


    // Alternative Pagination Datatable
    $('#alternative-page-datatable').DataTable({
        "pagingType": "full_numbers",
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-vertical-datatable').DataTable({
        "scrollY":        "350px",
        "scrollCollapse": true,
        "paging":         false,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-horizontal-datatable').DataTable({
        "scrollX": true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

    // Scroll Vertical Datatable
    $('#responsive-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });
    // Complex headers with column visibility Datatable
    $('#complex-header-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        },
        "columnDefs": [ {
            "visible": false,
            "targets": -1
        } ]
    });

    // Row created callback Datatable
    $('#row-callback-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        },
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('text-danger');
            }
        }
    });

    // Default Datatable
    $('#state-saving-datatable').DataTable({
        stateSave: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('flat-rounded-pagination');
            $(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative")
            $(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    });

});