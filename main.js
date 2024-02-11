// Define some functions that can be performed from within a grammar

let context = {
  randomNoun: () => RiTa.randomWord({ pos: "nn" }),
};

function generatePrompt() {
  let rg = RiTa.grammar(rules, context); // load our grammar
  let result = rg.expand();
  $("#output").html(result);
}
