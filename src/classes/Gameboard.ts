

// this will be the class for the gameboard.
// here this will organize everything about the gameboard and what it can do.
// properties -> constructor -> methods
class Gameboard {
    // properties
    length: number = 10;
    width: number = 10;
    
    // constructor
    constructor() {}

    // methods
    // row is first[] this column is second[]
    // so for example array[5][6] --> this is row 6 column 7
    drawBlankBoard(): any[][] {
        // tell the user the blank board is being drawn
        console.log(`Drawing a blank board that is ${this.length}x${this.width}`);

        // draw an empty 10x10 board
        const array: any = [];
        for (let i: number = 0; i < 10; i++) {
            array[i] = [];
            // now established rows, time to do columns
            for (let j: number = 0; j < 10; j++) {
                array[i][j] = `row${i+1} column${j+1}`;
            }
        }
        console.log(array);
        // console.log(array[5][6]);

        return array;
    }

    // method to show each player's game board right after ships have been placed
    printStartingBoard(): void {} 
}

export default Gameboard;