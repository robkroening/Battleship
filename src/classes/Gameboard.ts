

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
    drawBlankBoard(): void {
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
    }
}

export default Gameboard;