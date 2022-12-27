$("#run").click(() => tryCatch(run));

function run() {
  return Word.run(function(context) {
    var range = context.document.getSelection();
    range.font.color = "red";
    range.load("text");

    return context.sync().then(function() {
      console.log('The selected text was "' + range.text + '".');
    });
  });
}

/** Default helper for invoking an action and handling errors. */
function tryCatch(callback) {
  Promise.resolve()
    .then(callback)
    .catch(function(error) {
      // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
      console.error(error);
    });
}
