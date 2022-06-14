var rules = {
  start: ["$girl | $robot | $news"],
  activity: ["$happy | $sad"],
  girl: ["The girl and her robot $activity."],
  happy: ["danced", "played cards", "skipped rope", "told each other stories", "talked about the $topic. There was so much to say about the $topic"],
  sad: ["watched the (clouds | rain)", "searched for home"],
  robot: ["The robot thought $thoughts."],
  thoughts: ["$happyrobot | $sadrobot"],
  happyrobot: ["they were in love | the world seemed brighter (today | this evening | tonight)"],
  sadrobot: ["his battery was (dying | running low | empty)"],
  news: ["Days passed and the world grew warmer. | The nights were short and hot."],
  $topic: [".randomNoun()"]
};
