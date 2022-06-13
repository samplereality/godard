var rules = {
  start: ["$girl | $robot | $news"],
  activity: ["$happy | sad#"],
  girl: ["The girl and her robot #activity#."],
  happy: ["danced", "played cards", "skipped rope", "told each other stories"],
  sad: ["watched the rain", "searched for home"],
  robot: ["The robot thought #thoughts#."],
  thoughts: ["#happyrobot#", "#sadrobot#"],
  happyrobot: ["they were in love"],
  sadrobot: ["his battery was dying"],
  news: ["Days passed and the world grew warmer."],
};
