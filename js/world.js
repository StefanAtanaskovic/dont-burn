// Island, Lava, and Physics Simulation

class Island {
    constructor(name) {
        this.name = name;
        this.lava = new Lava();
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    simulate() {
        console.log(`Simulating island: ${this.name}`);
        this.lava.flow();
        this.objects.forEach(obj => obj.update());
    }
}

class Lava {
    constructor() {
        this.temperature = 1200; // degrees Celsius
    }

    flow() {
        console.log('Lava is flowing at temperature:', this.temperature);
    }
}

class PhysicsObject {
    constructor(name, mass) {
        this.name = name;
        this.mass = mass;
    }

    update() {
        console.log(`Updating physics object: ${this.name} with mass: ${this.mass}`);
    }
}

// Example usage
const myIsland = new Island('Volcano Isle');
myIsland.addObject(new PhysicsObject('Rock', 10));
myIsland.simulate();