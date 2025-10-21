// this is the possible values and definitions for everything related to the ships in the battleship game.
enum ShipNames {
    CARRIER = "carrier",
    BATTLESHIP = "battleship",
    DESTROYER = "destroyer",
    SUBMARINE = "submarine",
    PATROL_BOAT = "patrol boat"
}

// these are the possible values for Ships size
enum ShipSize {
    CARRIER = 5,
    BATTLESHIP = 4,
    DESTROYER = 3,
    SUBMARINE = 3,
    PATROL_BOAT = 2
}

// this will be the class for the actual ships in the game of battleship.
class Ship {
    // attributes
    name: ShipNames;
    shipSize: ShipSize;

    // constructor
    constructor(name: ShipNames, shipSize: ShipSize) {
        this.name = name;
        this.shipSize = shipSize;
    }

    // methods
    printShipDetails(): void {
        console.log(`The name of this ship is ${this.name} and the size of this ship is ${this.shipSize}.`);
    }

    // place ship
    placeShip(): void {}
}

// exports
export { Ship, ShipNames, ShipSize };