var rules = {
  start: "$title $plot",
  
  title: "<h3><em>.randomNoun().cap</em> &lpar;dir. Jean-Luc Godard, $year&rpar;</h3>",
  
  year: "196(2|3|4|5|6|7|8|9)",

  plot: "He $arrives and then—$bang—$refinery explodes. $Americans $love $Cannibals armed with $bazookas $fire $railroad She $falls $Speed to $Vincennes $cohn $train and $speaks $men $kill He reads $Mao $Monte throws $bomb at $Diderot He $goes He $peddles $ending",
  

  arrives: [
    "arrives",
    "is already there reading the sayings of Mao",
    "lies dead on the superhighway with brains spattered",
    "is killing himself",
    "harangues a crowd",
    "runs along the street",
    "jumps out of a window"
  ],

  bang: "bang | splash | splat | wham | rat-tat-tat | mumble mumble",

  refinery: [
    "a refinery",
    "a kindergarten",
    "Notre Dame",
    "the Communist Party headquarters",
    "the House of Parliament",
    "the Parthenon",
    "the office of <em>Le Figaro</em>",
    "the Elysée",
    "Paris"
  ],

  Americans: [
    "The Americans",
    "The Germans",
    "French paratroopers",
    "The Vietnamese",
    "Arabs",
    "Israelis",
    "The police"
  ],

  love: ["make love.", "do not make love."],

  Cannibals: [
    "Cannibals",
    "Indians",
    "Hordes of accountants",
    "Dissident Commmunists",
    "Crazed truck drivers"
  ],

  bazookas: [
    "bazookas",
    "yagatans",
    "copies of <em>Le Figaro</em>",
    "pirate's sabers",
    "submachine guns",
    "cans of $color paint",
    "Picasso paintings",
    "little red books",
    "picture postcards"
  ],

  fire: [
    "fire",
    "throw rocks",
    "throw bombs",
    "throw empty cans of $color paint",
    "pour some slippery stuff"
  ],

  color: ["red", "green", "blue", "yellow", "black"],

  railroad: [
    "on the railroad.",
    "on the Elysée.",
    "on the University of Nanterre.",
    "in Piazza Navona.",
    "all over the road."
  ],

  falls: [
    "falls, $bullets",
    "is thrown out of the window by CIA agents.",
    "is captured by paratroopers.",
    "is killed by Australian aborigines."
  ],

  bullets: [
    "riddled with bullets from a $rifle",
    "with a gaping wound in the belly.",
    "spewing forth streams of $color paint.",
    "making love with Voltaire."
  ],

  rifle: ["rifle.", "Loquat."],

  Speed: [
    "At mad speed",
    "Unsteadily",
    "Very, very slowly",
    "Remaining still while the background &lpar;a process shot&rpar; moves"
  ],

  Vincennes: [
    "Vincennes,",
    "Nanterre,",
    "Flins,",
    "Place de la Bastille,",
    "Clignancourt,",
    "Venice,"
  ],

  cohn: [
    "Cohn-Bendit",
    "Jacques Servan-Schreiber",
    "Jean-Paul Sartre",
    "Pier Paolo Pasolini",
    "D'Alembert"
  ],

  train: [
    "catches the train",
    "misses the train",
    "goes on a bicycle",
    "roller skates"
  ],

  speaks: ["speaks.", "bursts into tears.", "shouts <em>Viva Guevara!</em>"],

  men: ["Two men", "A band of Indians"],

  kill: ["kill her.", "kill everybody.", "kill nobody."],

  Mao: [
    "sayings of Mao.",
    "quotations from Brecht.",
    "the Declaration of the Rights of Man.",
    "Saint-John Perse.",
    "Prince Korzybski.",
    "Eluard.",
    "Lo Sun.",
    "Charles Péguy.",
    "Rosa Luxemburg."
  ],

  Monte: [
    "Montesquieu",
    "Diderot",
    "Sade",
    "Restif de la Bretonne",
    "Pompidou"
  ],

  bomb: ["a bomb", "a tomato", "$color paint"],

  Diderot: [
    "Diderot.",
    "Daniel Cohn-Bendit.",
    "Nixon.",
    "Madame de Sevigné.",
    "Voiture.",
    "Van Vogt.",
    "Einstein."
  ],

  goes: [
    "kills himself.",
    "goes away.",
    "kills all the others.",
    "throws a bomb at the Arc de Triomphe.",
    "blows up an electronic brain.",
    "empties onto the ground various cans of $color paint."
  ],

  peddles: [
    "peddles <em>Le Figaro</em>.",
    "peddles the saying of Mao.",
    "writes a ta-tze-bao.",
    "reads verses of Pierre Emmanuel.",
    "watches a Chaplin movie."
  ],

  ending: [
    "The natives arrive.",
    "The paratroopers arrive.",
    "The Germans arrive.",
    "Hordes of starving accountants brandishing sabers arrive.",
    "Armored cars arrive.",
    "Pier Paolo Pasolini with Pompidou arrives.",
    "The bank holiday traffic arrives.",
    "Diderot, selling the Encyclopédie door-to-door, arrives.",
    "The Marxist-Leninist Union on skateboards arrive."
  ]
}