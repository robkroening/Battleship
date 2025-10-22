// this will be the class for the gameboard.
// here this will organize everything about the gameboard and what it can do.
// properties -> constructor -> methods
class Gameboard {
    // constructor
    constructor() { }
    // methods
    // THIS DRAWS A FRESH BLANK BOARD
    // row is first[] this column is second[]
    // so for example array[5][6] --> this is row 6 column 7
    static drawBlankBoard() {
        // tell the user the blank board is being drawn
        // console.log(`Drawing a blank board that is ${Gameboard.height}x${Gameboard.width}`);
        // draw an empty 10x10 board
        const array = [];
        for (let i = 0; i < 10; i++) {
            // array[i] = [];
            const row = [];
            // now established rows, time to do columns
            for (let j = 0; j < 10; j++) {
                row[j] = `x${i} y${j}`;
            }
            array[i] = row;
        }
        return array;
    }
    // print a blank board
    static printBlankBoard() {
        const blankBoard = Gameboard.drawBlankBoard();
        console.log(blankBoard);
    }
    // method to show each player's game board right after ships have been placed
    printStartingBoard() { }
    // print your own current board after a move
    printCurrentGameBoard() { }
}
// properties
Gameboard.height = 10;
Gameboard.width = 10;
export { Gameboard };
//# sourceMappingURL=Gameboard.js.map