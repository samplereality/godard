var rules = {
  start: ["$girl[2] | $robot[3] | $news $news[5]"],
  activity: ["$happy | $sad"],
  girl: ["The girl and her robot $activity."],
  happy: [
    "danced",
    "played cards",
    "skipped rope",
    "told each other stories",
    "talked about the $topic. There was so much to say about the $topic",
  ],
  sad: ["watched the (clouds | rain)", "searched for home"],
  robot: ["The robot thought $thoughts."],
  thoughts: ["$happyrobot | $sadrobot"],
  happyrobot: [
    "they were in love | the world seemed brighter (today | this evening | tonight)",
  ],
  sadrobot: ["his battery was (dying | running low | empty)"],
  news: [
    "Days passed and the world grew warmer. | The nights were short and hot. | The (troops | rebels).nr() were (losing | gaining) ground. | (Another | A).nr() (rocket | satellite | ship).nr() launched at (dawn | daybreak).",
  ],
  $topic: [".randomNoun()"],
};

// Tips for modifying RiTa grammars:
// Add these to the end of a rule or a phrase
// .art() 	adds the correct article according to the phonemes 	art()
// .cap() 	capitalizes the first letter of the phrase 	cap()
// .uc() 	capitalizes all letters of the phrase 	uc()
// .qq() 	adds (smart) quotes around the phrase 	qq()
// .nr() 	ensures a choice will never repeat its output 	nr()
// .s() 	pluralizes the noun phrase via the RiTa inflector 	s()
//
// More details at https://observablehq.com/@dhowe/tut-rita-grammars
// and https://observablehq.com/@dhowe/riscript