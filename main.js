$(document).ready(function() {

    var people = ["police officer",
      "priest", "grave robber", "soldier", "teacher", "marine", "ship captain", "grandmother", "spy", "car mechanic", "web developer", "marksman", "street thug", "superhero", "fashion designer", "sports star", "billionaire", "stock broker", "salesman", "bus driver", "factory worker", "prostitute", "babysitter", "politician",
    ];

    var situations = ["find a million dollars", "discuss politics", "visit a department store", "talk about love", "pass the time at a rest stop", "escape a killer", "plot a murder", "eat dinner", "witness a crime", "play a game", "get locked out in the cold", "sit together on an airplane", "see a ghost", "drink coffee", "sit together at the BMV", "find a haunted house", "have an argument", "fight over the last toy on the shelf", "see a movie together", "starve in the desert" ];

var counter = 0;

$("#button").click(function(){
    $("#readout").fadeOut("slow", function(){

    var person1 = _.sample(people);
    var person2 = _.sample(people);
    var situation = _.sample(situations);

    if (person1 === person2) {
      person1 = _.sample(people);
      person2 = _.sample(people);
    }

    counter = counter + 1;

    $("#person1").html(" " + person1 + " ");
    $("#person2").html(" " + person2 + " ");
    $("#situation").html(" " + situation);
    if (counter < 10){
    $("#counter").html(counter);
} else {
    $("#counter").html(counter);
    $("#write-something").html("stop generating ideas and write something!");
}
    $("#readout").fadeIn();
  });

});

});
