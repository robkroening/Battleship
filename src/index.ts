import { Game } from "./classes/Game.js";
import { Gameboard } from "./classes/Gameboard.js";
import { ShipOrientation, ShipNames, ShipSize, ShipTrailingDirection, ShipsArray } from "./enums/ShipEnums.js";
import { Ship } from "./classes/Ship.js";
import { Player } from "./classes/Player.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

// console.log('Hello TypeScript');
// const game1: Gameboard = new Gameboard();
// Gameboard.printBlankBoard();
// const ship1 = new Ship
// const ship1: Ship = new Ship(ShipNames.BATTLESHIP, ShipSize.BATTLESHIP);
// ship1.printShipDetails();
// const player1: Player = new Player();
// player1.getShipPlacement();
// Game.run();

// LOGIC TESTING HERE
// for placing a ship need:
// user input
    // starting x
    // starting y 
    // direction 
    // ship size or type of ship

interface ShipUserInput {
    shipType: string;
    startingX: number;
    startingY: number;
    direction: string;
}

function getPlayerShipInput(): ShipUserInput {
    const shipType: string = prompt("Which ship would you like to place? ");
    const startingXString: string = prompt("What is the starting X position where you would like to place your ship? ");
    const startingYString: string = prompt("What is the starting Y position where you would like to place your ship? ");
    const direction: string = prompt("In what direction would you like to place your ship? ");
    const startingX: number = Number(startingXString);
    const startingY: number = Number(startingYString);
    const returnObject: ShipUserInput = { shipType, startingX, startingY, direction };
    // console.log(returnObject);
    return returnObject;
}
// getPlayerShipInput();


function placeShip(): void {
    // ships array to remove from
    let shipsCopy: string[] = [...ShipsArray];
    let board: string[][] = Gameboard.drawBlankBoard();

    while (shipsCopy.length > 0) {
        // get the inital board
        // console.log("Here is a blank board before you place the ship: ");
        console.log(board);

        // get the user inputs and save them in an object
        const shipPlayerInput: ShipUserInput = getPlayerShipInput();
        // error handling for user input
        

        // assign ship size based on the type of ship player picks
        let shipSize: number = 0;
        if (shipPlayerInput.shipType === ShipNames.CARRIER) {
            shipSize = ShipSize.CARRIER;
        } else if (shipPlayerInput.shipType === ShipNames.BATTLESHIP) {
            shipSize = ShipSize.BATTLESHIP;
        } else if (shipPlayerInput.shipType === ShipNames.DESTROYER || shipPlayerInput.shipType === ShipNames.SUBMARINE) {
            shipSize = ShipSize.DESTROYER;
        } else if (shipPlayerInput.shipType === ShipNames.PATROL_BOAT) {
            shipSize = ShipSize.PATROL_BOAT;
        }
        
        // need logic here to place the ship based off the user inputs and update the board
        // local alias
        const x: number = shipPlayerInput.startingX;
        const y: number = shipPlayerInput.startingY;

        // logic for placing the chosen ship
        for (let i: number = 0; i < shipSize; i++) {
            if (shipPlayerInput.direction === ShipOrientation.HORIZONTAL) {
                // update the board (horizontally)
                board[x]![y + i] = "-";
            } else if (shipPlayerInput.direction === ShipOrientation.VERTICAL) {
                // update the board (vertically)
                board[x + i]![y] = "-";
            }
        }
        // print back the updated board
        // console.log(board);

        // remove the placed ship from the array
        if (shipsCopy.includes(shipPlayerInput.shipType)) {

        // if the ship is still in the array, then remove it
        const indexToRemove: number = shipsCopy.indexOf(shipPlayerInput.shipType);
        shipsCopy.splice(indexToRemove, 1);

        }
        console.log(shipsCopy);
    }
}
placeShip();