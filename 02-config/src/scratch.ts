interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void // makes sure that there will always be a method by this name - how that method is implemented is not of concern
}

// seems like not super DRY having to declare types twice, but again it's strict
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string // can add more, but cannot have less
  ){}

  createStory(): void {
    console.log("Story was created");
  }
}