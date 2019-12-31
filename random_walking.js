var step;

function reset() {
    step = 0;
}

function walk() {
    var w;
    reset();
    for (w = 1; ; w++) {
        if (Math.random() > 0.5) {
            step++;
        } else {
            step--;
        }
        
        if (Math.abs(step) > 2) {
            break;
        }
    }
    
    return w;
}

function simulate(n) {
    console.log("simulating for " + n + " walks...");
    var steps = [];
    while (n > 0) {
        steps.push(walk());
        n--;
    }
    var avg = average(steps);
    var high_score = Math.max(...steps);
    var biggest_fail = Math.min(...steps); // i was about to put "me" as biggest fail
    
    console.log("average number of steps: " + avg);
    console.log("most steps: " + high_score);
    console.log("least steps: " + biggest_fail);
}

function average(array) {
    var sum = 0;
    array.forEach((n) => {
        sum += n;
    });
    
    return (sum / array.length);
}
