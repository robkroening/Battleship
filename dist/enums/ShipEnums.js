// this is the possible values and definitions for everything related to the ships in the battleship game.
var ShipNames;
(function (ShipNames) {
    ShipNames["CARRIER"] = "carrier";
    ShipNames["BATTLESHIP"] = "battleship";
    ShipNames["DESTROYER"] = "destroyer";
    ShipNames["SUBMARINE"] = "submarine";
    ShipNames["PATROL_BOAT"] = "patrol boat";
})(ShipNames || (ShipNames = {}));
// these are the possible values for Ships size
var ShipSize;
(function (ShipSize) {
    ShipSize[ShipSize["CARRIER"] = 5] = "CARRIER";
    ShipSize[ShipSize["BATTLESHIP"] = 4] = "BATTLESHIP";
    ShipSize[ShipSize["DESTROYER"] = 3] = "DESTROYER";
    ShipSize[ShipSize["SUBMARINE"] = 3] = "SUBMARINE";
    ShipSize[ShipSize["PATROL_BOAT"] = 2] = "PATROL_BOAT";
})(ShipSize || (ShipSize = {}));
// these are the orientations the Ships can face
var ShipOrientation;
(function (ShipOrientation) {
    ShipOrientation["VERTICAL"] = "vertical";
    ShipOrientation["HORIZONTAL"] = "horizontal";
})(ShipOrientation || (ShipOrientation = {}));
// this is the trailing direction for the rest of the ship
var ShipTrailingDirection;
(function (ShipTrailingDirection) {
    ShipTrailingDirection["UP"] = "up";
    ShipTrailingDirection["DOWN"] = "down";
    ShipTrailingDirection["LEFT"] = "left";
    ShipTrailingDirection["RIGHT"] = "right";
})(ShipTrailingDirection || (ShipTrailingDirection = {}));
const ShipsArray = [
    "carrier",
    "battleship",
    "destroyer",
    "submarine",
    "patrol boat"
];
export { ShipsArray, ShipNames, ShipOrientation, ShipSize, ShipTrailingDirection };
//# sourceMappingURL=ShipEnums.js.map