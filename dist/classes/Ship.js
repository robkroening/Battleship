import { Gameboard } from "./Gameboard.js";
import { ShipNames, ShipOrientation, ShipSize } from "../enums/ShipEnums.js";
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
    // place ship
    // need to specify a user input of coordinates of where the player wants to place the ship
    placeShip() {
        // get the blank board
        // print blank board
        Gameboard.printBlankBoard();
        // ask player what ship they want to place
        // ask player where they want to place the ship
        // CHECK to see if the ship can be placed here
        // check for boundaries
        // check for intersections of other ships
        // if conditionals are passed, place the ship where specified from user
        // print the current board after ship has been placed
    }
}
// exports
export { Ship };
//# sourceMappingURL=Ship.js.map