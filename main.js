// Define some functions that can be performed from within a grammar

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

var addRhyme = function(word) { 
  let res = RiTa.rhymes(word);    // get the rhymes
  return word + ' rhymes with ' + RiTa.random(res); // append a random one
}

RiTa.addTransform('rhymes', addRhyme);
