// this is the possible values and definitions for everything related to the ships in the battleship game.
enum ShipNames {
    CARRIER = "carrier",
    BATTLESHIP = "battleship",
    DESTROYER = "destroyer",
    SUBMARINE = "submarine",
    PATROL_BOAT = "patrol boat"
}

// these are the possible values for Ships size
enum ShipSize {
    CARRIER = 5,
    BATTLESHIP = 4,
    DESTROYER = 3,
    SUBMARINE = 3,
    PATROL_BOAT = 2
}

// these are the orientations the Ships can face
enum ShipOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

// this is the trailing direction for the rest of the ship
enum ShipTrailingDirection {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

const ShipsArray: string[] = [
    "carrier",
    "battleship",
    "destroyer",
    "submarine",
    "patrol boat"
]

export { ShipsArray, ShipNames, ShipOrientation, ShipSize, ShipTrailingDirection };