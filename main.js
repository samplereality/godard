// Define some functions that can be performed from within a grammar

function generatePrompt() {
  let rg = RiTa.grammar(rules); // load our grammar
  let result = rg.expand();
  $("#output").text(result);
}
