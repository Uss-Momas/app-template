(function ($){
  CKEDITOR.replace("editor-4");
  if ($("#editor-5").length) {
    ClassicEditor.create(document.querySelector('#editor-5')).then(function (editor) {
      editor
    })
      .catch(function (error) {
        console.error("error", error);
      });
  }
}(jQuery))
