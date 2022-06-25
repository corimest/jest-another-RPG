const Potion = require('../lib/Potion'); 

jest.mock('../lib/Potion'); 

console.log(new Potion()); 


const Player = require('../lib/Player'); 

test('creates a player object', () => {
    const player = new Player('Dave'); 

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    ); 

    expect(player.name).toBe('Dave'); 
    expect(player.health).toEqual(expect.any(Number)); 
    expect(player.strength).toEqual(expect.any(Number)); 
    expect(player.agility).toEqual(expect.any(Number)); 
});

test('gets player stats as an object', () => {
    const player = new Player('Dave'); 

    expect(player.getStats()).toHaveProperty('potions'); 
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
    const player = new Player('Dave'); 

    expect(player.getInventory()).toEqual(expect.any(Array)); 

    player.inventory = []; 

    expect(player.getInventory()).toEqual(false); 
});

test("gets player helath value", () => {
    const player = new Player('Dave'); 

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive or not', () => {
    const player = new Player('Dave');
    //updating value of player health halfway through test to check for both true and false conditions
    expect(player.isAlive()).toBeTruthy(); 

    player.health = 0; 

    expect(player.isAlive()).toBeFalsy();
});

test('subtracts from player health', () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(999999); 

    expect(player.health).toBe(0);
});