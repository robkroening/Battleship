declare enum ShipNames {
    CARRIER = "carrier",
    BATTLESHIP = "battleship",
    DESTROYER = "destroyer",
    SUBMARINE = "submarine",
    PATROL_BOAT = "patrol boat"
}
declare enum ShipSize {
    CARRIER = 5,
    BATTLESHIP = 4,
    DESTROYER = 3,
    SUBMARINE = 3,
    PATROL_BOAT = 2
}
declare enum ShipOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
declare enum ShipTrailingDirection {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}
declare const ShipsArray: string[];
export { ShipsArray, ShipNames, ShipOrientation, ShipSize, ShipTrailingDirection };
//# sourceMappingURL=ShipEnums.d.ts.map