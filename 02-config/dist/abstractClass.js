"use strict";
class TakePhotoB {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // non-abstract classes need to be implemented inside this definition. CAN also be overwritten
    getReelTime() {
        // ...
        return 8;
    }
}
// const ames = new TakePhoto("cameramode", 'test'); // invalid, "Cannot create an instance of an abstract class"
// must only reate new on subclasses that extend the abstract class
class MyApp extends TakePhotoB {
    constructor(cameraMode, filter, burst) {
        // this syntax will look different in js file once compiled
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepiaFilter() {
        console.log("Sepia filter");
    }
}
const ames = new MyApp("cameramode", 'test', 8); // valid!
ames.getReelTime;
