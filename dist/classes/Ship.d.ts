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
declare class Ship {
    name: ShipNames;
    shipSize: ShipSize;
    constructor(name: ShipNames, shipSize: ShipSize);
    printShipDetails(): void;
}
export { Ship, ShipNames, ShipSize };
//# sourceMappingURL=Ship.d.ts.map