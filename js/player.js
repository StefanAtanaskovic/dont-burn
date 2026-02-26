class Player {
    constructor(position, health, abilities) {
        this.position = position;
        this.health = health;
        this.abilities = abilities;
    }

    move(newPosition) {
        this.position = newPosition;
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0; // Ensure health doesn't go below 0
        }
    }

    useAbility(abilityName) {
        if (this.abilities.includes(abilityName)) {
            console.log(`Using ability: ${abilityName}`);
            // Implement ability logic here
        } else {
            console.log(`Ability ${abilityName} not available.`);
        }
    }
}

// Example usage:
// const player = new Player({x: 0, y: 0}, 100, ['jump', 'run']);