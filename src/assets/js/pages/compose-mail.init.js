$(function () {
  //Initialize compose mail editor
  composeMail()
});

/**
* ----------------------------------------------
* Initialize compose mail editor
* ----------------------------------------------
*/
function composeMail() {
  if ($("#compose-editor").length) {
    ClassicEditor.create(document.querySelector('#compose-editor')).then(function (editor) {
      editor
    })
      .catch(function (error) {
        console.error("error", error);
      });
  }
}