function Laptop(storage) {
    this.storage = storage;
    this.taken = false;
}

var cart;

function reset() {
    cart = [ //12 have 160 GB, 8 have 320 GB
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("160 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
        new Laptop("320 GB"),
    ];
}

function take_laptop() {
    var laptop = cart[Math.floor(Math.random() * cart.length)];
    laptop.taken = true;
    cart = cart.filter((l) => { return !l.taken; });
    return laptop;
}

function simulate(n) {
    var draws = n;
    var s = 0; //number of times a student takes a laptop with 160 GB of storage
    var t = 0; //number of times a teacher takes two laptops, both with 320 GB of storage, given s, above.
    
    while (n > 0) {
        reset();
        var teachers = [
            take_laptop(), take_laptop()
        ];
        
        var student = take_laptop();
        
        if (student.storage == "160 GB") {
            s++;
            if (teachers[0].storage == "320 GB" && teachers[1].storage == "320 GB") {
                t++;
            }
        }
        
        n--;
    }
    
    console.log(" ** RESULTS ** ");
    console.log("draws: " + draws);
    console.log("number of times a student got a laptop with 160 GB: " + s);
    console.log("number of times a teacher got two laptops with 320 GB, given that the event above: " + t);
}
