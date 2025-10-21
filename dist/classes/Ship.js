// this is the possible values and definitions for everything related to the ships in the battleship game.
var ShipNames;
(function (ShipNames) {
    ShipNames["CARRIER"] = "carrier";
    ShipNames["BATTLESHIP"] = "battleship";
    ShipNames["DESTROYER"] = "destroyer";
    ShipNames["SUBMARINE"] = "submarine";
    ShipNames["PATROL_BOAT"] = "patrol boat";
})(ShipNames || (ShipNames = {}));
// these are the possible values for Ships size
var ShipSize;
(function (ShipSize) {
    ShipSize[ShipSize["CARRIER"] = 5] = "CARRIER";
    ShipSize[ShipSize["BATTLESHIP"] = 4] = "BATTLESHIP";
    ShipSize[ShipSize["DESTROYER"] = 3] = "DESTROYER";
    ShipSize[ShipSize["SUBMARINE"] = 3] = "SUBMARINE";
    ShipSize[ShipSize["PATROL_BOAT"] = 2] = "PATROL_BOAT";
})(ShipSize || (ShipSize = {}));
// this will be the class for the actual ships in the game of battleship.
class Ship {
    // constructor
    constructor(name, shipSize) {
        this.name = name;
        this.shipSize = shipSize;
    }
    // methods
    printShipDetails() {
        console.log(`The name of this ship is ${this.name} and the size of this ship is ${this.shipSize}.`);
    }
}
// exports
export { Ship, ShipNames, ShipSize };
//# sourceMappingURL=Ship.js.map