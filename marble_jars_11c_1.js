//exercise 11C, problem 1, page 695

var jar_a, jar_b;

function reset() {
    jar_a = [ //5 yellow, 8 green
        new Marble("yellow", "A"),
        new Marble("yellow", "A"),
        new Marble("yellow", "A"),
        new Marble("yellow", "A"),
        new Marble("yellow", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
        new Marble("green", "A"),
    ];

    jar_b = [ //2 yellow, 6 green
        new Marble("yellow", "B"),
        new Marble("yellow", "B"),
        new Marble("green", "B"),
        new Marble("green", "B"),
        new Marble("green", "B"),
        new Marble("green", "B"),
        new Marble("green", "B"),
        new Marble("green", "B"),
    ];
}

function Marble(colour, jar) {
    this.colour = colour;
    this.jar = jar;
    this.taken = false;
}

Marble.prototype.take = function() {
    this.taken = true;
}

function draw_marble(jar) {
    var marble = jar[Math.floor(Math.random() * jar.length)];
    marble.take();
    return marble;
}

function simulate(n) {
    var yellow_marbles = 0;
    var yellow_marbles_from_a = 0;
    var draws = n;
    while (n > 0) {
        reset();
        //draw two marbles from A and put them in B
        jar_b.push(draw_marble(jar_a));
        jar_a = jar_a.filter((m) => {return !m.taken;});
        jar_b.push(draw_marble(jar_a));
        var marble = draw_marble(jar_b);
        if (marble.colour == "yellow") {
            yellow_marbles++;
            
            if (marble.jar == "A") {
                yellow_marbles_from_a++;
            }
        }
        n--;
    }
    
    console.log("** STATISTICS **");
    console.log("draws: " + draws);
    console.log("yellow marbles: " + yellow_marbles);
    console.log("yellow marbles from jar A: " + yellow_marbles_from_a);
    console.log(" * * * * * ");
    console.log("yellow marble probability: " + (yellow_marbles / draws));
    console.log("marble from A, provided that it's yellow probability: " + (yellow_marbles_from_a / yellow_marbles));
}
