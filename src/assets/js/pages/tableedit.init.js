//initializing 
(function($) {
    "use strict";
    $("#inline-editable").Tabledit({
        inputClass: 'form-control form-control-sm',
        editButton: false,
        deleteButton: false,
        columns: {
            identifier: [0, "id"],
            editable: [
                [1, "col1"],
                [2, "col2"],
                [3, "col3"],
                [4, "col4"],
                [6, "col6"]
            ]
        }
    }),

    $("#btn-editable").Tabledit({
        buttons: {
            edit: {
                class: 'btn btn-success',
                html: '<span class="mdi mdi-pencil"></span>',
                action: 'edit'
            }
        },
        inputClass: 'form-control form-control-sm',
        deleteButton: false,
        saveButton: false,
        autoFocus: false,
        columns: {
            identifier: [0, "id"],
            editable: [
                [1, "col1"],
                [2, "col2"],
                [3, "col3"],
                [4, "col4"],
                [6, "col6"]
            ]
        }
    })
}(jQuery));