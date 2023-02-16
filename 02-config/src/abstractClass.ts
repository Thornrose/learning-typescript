abstract class TakePhotoB {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  //abstract methods will be implemented later
  abstract getSepiaFilter(): void
  // non-abstract classes need to be implemented inside this definition. CAN also be overwritten
  getReelTime(): number{
    // ...
    return 8
  }

}

// const ames = new TakePhoto("cameramode", 'test'); // invalid, "Cannot create an instance of an abstract class"
// must only reate new on subclasses that extend the abstract class

class MyApp extends TakePhotoB{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    // this syntax will look different in js file once compiled
    super(cameraMode, filter)
  }

  getSepiaFilter(): void {
    console.log("Sepia filter");
  }
}

const ames = new MyApp("cameramode", 'test', 8); // valid!

ames.getReelTime