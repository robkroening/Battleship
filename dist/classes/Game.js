import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";
import { Ship } from "./Ship.js";
import { ShipNames, ShipOrientation, ShipSize, ShipTrailingDirection } from "../enums/ShipEnums.js";
// this is the file for running the game and for any methods
class Game {
    // attributes
    // constructor
    constructor() { }
    // methods
    // this runs the main game loop
    static run() {
        console.log('Welcome to the game of battleship.');
        const sInput = Player.getShipInput();
        const startingPoint = Player.getShipStartingPoint();
        const tdInput = Player.getShipTrailingDirection();
        console.log(sInput, startingPoint, tdInput);
    }
}
export { Game };
//# sourceMappingURL=Game.js.map