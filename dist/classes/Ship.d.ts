import { ShipNames, ShipSize } from "../enums/ShipEnums.js";
declare class Ship {
    name: ShipNames;
    shipSize: ShipSize;
    constructor(name: ShipNames, shipSize: ShipSize);
    printShipDetails(): void;
    placeShip(): void;
}
export { Ship };
//# sourceMappingURL=Ship.d.ts.map