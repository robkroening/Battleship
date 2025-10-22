import { Game } from "./classes/Game.js";
import { Gameboard } from "./classes/Gameboard.js";
import { ShipOrientation, ShipNames, ShipSize, ShipTrailingDirection, ShipsArray } from "./enums/ShipEnums.js";
import { Ship } from "./classes/Ship.js";
import { Player } from "./classes/Player.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
function getPlayerShipInput() {
    const shipType = prompt("Which ship would you like to place? ");
    const startingXString = prompt("What is the starting X position where you would like to place your ship? ");
    const startingYString = prompt("What is the starting Y position where you would like to place your ship? ");
    const direction = prompt("In what direction would you like to place your ship? ");
    const startingX = Number(startingXString);
    const startingY = Number(startingYString);
    const returnObject = { shipType, startingX, startingY, direction };
    // console.log(returnObject);
    return returnObject;
}
// getPlayerShipInput();
function placeShip() {
    // ships array to remove from
    let shipsCopy = [...ShipsArray];
    let board = Gameboard.drawBlankBoard();
    while (shipsCopy.length > 0) {
        // get the inital board
        // console.log("Here is a blank board before you place the ship: ");
        console.log(board);
        // get the user inputs and save them in an object
        const shipPlayerInput = getPlayerShipInput();
        // assign ship size based on the type of ship player picks
        let shipSize = 0;
        if (shipPlayerInput.shipType === ShipNames.CARRIER) {
            shipSize = ShipSize.CARRIER;
        }
        else if (shipPlayerInput.shipType === ShipNames.BATTLESHIP) {
            shipSize = ShipSize.BATTLESHIP;
        }
        else if (shipPlayerInput.shipType === ShipNames.DESTROYER || shipPlayerInput.shipType === ShipNames.SUBMARINE) {
            shipSize = ShipSize.DESTROYER;
        }
        else if (shipPlayerInput.shipType === ShipNames.PATROL_BOAT) {
            shipSize = ShipSize.PATROL_BOAT;
        }
        // need logic here to place the ship based off the user inputs and update the board
        // local alias
        const x = shipPlayerInput.startingX;
        const y = shipPlayerInput.startingY;
        // logic for placing the chosen ship
        for (let i = 0; i < shipSize; i++) {
            if (shipPlayerInput.direction === ShipOrientation.HORIZONTAL) {
                // update the board (horizontally)
                board[x][y + i] = "-";
            }
            else if (shipPlayerInput.direction === ShipOrientation.VERTICAL) {
                // update the board (vertically)
                board[x + i][y] = "-";
            }
        }
        // print back the updated board
        // console.log(board);
        // remove the placed ship from the array
        if (shipsCopy.includes(shipPlayerInput.shipType)) {
            // if the ship is still in the array, then remove it
            const indexToRemove = shipsCopy.indexOf(shipPlayerInput.shipType);
            shipsCopy.splice(indexToRemove, 1);
        }
        console.log(shipsCopy);
    }
    // // get the inital board
    // console.log("Here is a blank board before you place the ship: ");
    // let board: string[][] = Gameboard.drawBlankBoard();
    // console.log(board);
    // // get the user inputs and save them in an object
    // const shipPlayerInput: ShipUserInput = getPlayerShipInput();
    // // assign ship size based on the type of ship player picks
    // let shipSize: number = 0;
    // if (shipPlayerInput.shipType === ShipNames.CARRIER) {
    //     shipSize = ShipSize.CARRIER;
    // } else if (shipPlayerInput.shipType === ShipNames.BATTLESHIP) {
    //     shipSize = ShipSize.BATTLESHIP;
    // } else if (shipPlayerInput.shipType === ShipNames.DESTROYER || shipPlayerInput.shipType === ShipNames.SUBMARINE) {
    //     shipSize = ShipSize.DESTROYER;
    // } else if (shipPlayerInput.shipType === ShipNames.PATROL_BOAT) {
    //     shipSize = ShipSize.PATROL_BOAT;
    // }
    // // need logic here to place the ship based off the user inputs and update the board
    // // local alias
    // const x: number = shipPlayerInput.startingX;
    // const y: number = shipPlayerInput.startingY;
    // // logic for placing the chosen ship
    // for (let i: number = 0; i < shipSize; i++) {
    //     if (shipPlayerInput.direction === ShipOrientation.HORIZONTAL) {
    //         // update the board (horizontally)
    //         board[x]![y + i] = "-";
    //     } else if (shipPlayerInput.direction === ShipOrientation.VERTICAL) {
    //         // update the board (vertically)
    //         board[x + i]![y] = "-";
    //     }
    // }
    // // print back the updated board
    // console.log(board);
    // // remove the placed ship from the array
    // if (shipsCopy.includes(shipPlayerInput.shipType)) {
    // // if the ship is still in the array, then remove it
    // const indexToRemove: number = shipsCopy.indexOf(shipPlayerInput.shipType);
    // shipsCopy.splice(indexToRemove, 1);
    // }
    // console.log(shipsCopy);
}
placeShip();
// function to count down the amount of ships player has left to place
// get the array of the ships
// once player has placed down down the ship, remove it from the array
function shipsLeftToPlace(ship) {
    let shipsCopy = [...ShipsArray];
    console.log(shipsCopy);
    if (shipsCopy.includes(ship)) {
        // if the ship is still in the array, then remove it
        const indexToRemove = shipsCopy.indexOf(ship);
        shipsCopy.splice(indexToRemove, 1);
    }
    console.log(shipsCopy);
}
// shipsLeftToPlace("submarine");
// pass in the ships name as a parameter
// while the array of the ships the player needs to place > 0, continue the loop
function placeAllShipsLoop(shipName) {
    let shipsArrayCopy = [...ShipsArray];
    console.log(shipsArrayCopy);
    // start loop --> this will go until the array is empty
    while (shipsArrayCopy.length > 0) {
        // if the ship entered from user input matches anything in the shipsArrayCopy, remove it from the array
        if (shipsArrayCopy.includes(shipName)) {
            const indexToRemove = shipsArrayCopy.indexOf(shipName);
            shipsArrayCopy.splice(indexToRemove, 1);
        }
        console.log(shipsArrayCopy);
    }
    // place ship
    // remove this ship from the array
    // when array is empty, close the loop
}
// placeAllShipsLoop();
//# sourceMappingURL=index.js.map