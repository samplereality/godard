var rules = {
  start: ["$girl | $robot | $news"],
  activity: ["$happy | $sad"],
  girl: ["The girl and her robot $activity."],
  happy: ["danced", "played cards", "skipped rope", "told each other stories", "talked about $topic. There was so much to say about $topic"],
  sad: ["watched the rain", "searched for home"],
  robot: ["The robot thought $thoughts."],
  thoughts: ["$happyrobot | $sadrobot"],
  happyrobot: ["they were in love"],
  sadrobot: ["his battery was (dying | running low | empty)"],
  news: ["Days passed and the world grew warmer."],
  $topic: [".randomNoun()"]
};
