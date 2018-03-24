export class Boat {
    boatId: string;
    boatName: string;
    boatStatus: BoatStatus;
    boatPicture: Uint8Array;
    boatDescription: string;
    boatLength: number;
    boatMake: string;
    boatYear: number;
    creditsPerHourOfUsage: number;
}

enum BoatStatus{
    OutOfService,
    Operational,
    Scrapped,
    Sold
} 
