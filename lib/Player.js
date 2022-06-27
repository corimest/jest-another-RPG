const Potion = require('../lib/Potion'); 
const Character = require('../lib/Character');

class Player extends Character{
    constructor(name = '') {
    // call parent constructor
    super(name); 

    this.inventory = [new Potion('health'), new Potion()]; 
}
    getStats() {
        return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
        return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
        }
    }
    }

    // // inherit prototype methods from Character here: 
    // Player.prototype = Object.create(Character.prototype); 


    // // returns an object with various player properties
    // Player.prototype.getStats = function() {
    //     return {
    //         potions: this.inventory.length, 
    //         health: this. health, 
    //         strength: this.strength, 
    //         agility: this.agility
    //     };
    // };

    // // returns the inventory array or false if empty
    // Player.prototype.getInventory = function() {
    //     if(this.inventory.length) {
    //         return this.inventory; 
    //     }
    //     return false;
    // };

    // //potion add
    // Player.prototype.addPotion = function(potion) {
    //     this.inventory.push(potion);
    // };

    // //potion use
    // Player.prototype.usePotion = function(index) {
    //     const potion = this.getInventory().splice(index, 1)[0]; 

    //     switch (potion.name){
    //         case 'agility':
    //             this.agility += potion.value; 
    //             break; 
    //         case 'health':
    //             this.health += potion.value; 
    //             break; 
    //         case 'strength':
    //             this.strength += potion.value; 
    //             break; 
    //     }
    // }; 

module.exports = Player;