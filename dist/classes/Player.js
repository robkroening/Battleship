import promptSync from "prompt-sync";
import { Ship } from "./Ship.js";
import { ShipNames, ShipOrientation, ShipSize, ShipTrailingDirection } from "../enums/ShipEnums.js";
const prompt = promptSync();
// this is the class that has everything to do with the 2 players
class Player {
    // attributes
    // constructor
    constructor() { }
    // methods
    // player makes move to attack the other board
    makeMove() { }
    // get user input about which ship to place
    static getShipInput() {
        const shipInput = prompt("What ship would you like to place down? ");
        // console.log(shipInput);
        return shipInput;
    }
    // get starting point for ship user input
    static getShipStartingPoint() {
        const startingPoint = prompt("Where on the board do you want the front of the ship to be? ");
        console.log(startingPoint);
        return startingPoint;
    }
    // get ending point for ship user input
    static getShipTrailingDirection() {
        const trailingDirection = prompt("What direction do you want the ship to be from the starting point (north/south,east/west)? ");
        console.log(trailingDirection);
        return trailingDirection;
    }
}
export { Player };
//# sourceMappingURL=Player.js.map