let context = {
  randomNoun: () => RiTa.randomWord({ pos: "nn" }),
  pluralNoun: () => RiTa.randomWord({ post: "nns" }),
  randomAdjective: () => RiTa.randomWord({ pos: "jj" }),
  randomAdverb: () => RiTa.randomWord({ pos: "rb" }),
};

function generatePrompt() {
  let rg = RiTa.grammar(rules, context); // load our grammar
  let result = rg.expand();
  $("#output").text(result);
}