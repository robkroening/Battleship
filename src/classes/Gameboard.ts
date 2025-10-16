

// this will be the class for the gameboard.
// here this will organize everything about the gameboard and what it can do.
// properties -> constructor -> methods
class Gameboard {
    // properties
    length: number;
    width: number;
    
    // constructor
    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    // methods
    greet(): void {
        console.log("I am literally a gameboard saying hello. dont make no sense boy")
    }
}

export default Gameboard;