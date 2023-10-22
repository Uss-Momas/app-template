//initializing FileUpload
(function ($) {
    "use strict";
    Dropzone.autoDiscover = false;

    $('[data-plugin="dropzone"]').each(function () {
        var actionUrl = $(this).attr('action')
        var previewContainer = $(this).data('previewsContainer');

        var opts = { url: actionUrl };
        if (previewContainer) {
            opts['previewsContainer'] = previewContainer;
        }

        var uploadPreviewTemplate = $(this).data("uploadPreviewTemplate");
        if (uploadPreviewTemplate) {
            opts['previewTemplate'] = $(uploadPreviewTemplate).html();
        }

        var dropzoneEl = $(this).dropzone(opts);

    });
    if ($('[data-plugins="dropify"]').length > 0) {
        // Dropify
        $('[data-plugins="dropify"]').dropify({
            messages: {
                'default': 'Drag and drop a file here or click',
                'replace': 'Drag and drop or click to replace',
                'remove': 'Remove',
                'error': 'Ooops, something wrong appended.'
            },
            error: {
                'fileSize': 'The file size is too big (1M max).'
            }
        });
    }
}(jQuery));

