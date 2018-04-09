export class Boat {
    

    constructor(public boatId: string,
        public boatName: string,
        public boatStatus: string,
        public boatPicture: Uint8Array,
        public boatDescription: string,
        public boatLength: number,
        public boatMake: string,
        public boatYear: number,
        public creditsPerHourOfUsage: number)
        {}

}

export enum BoatStatus{
    OutOfService,
    Operational,
    Scrapped,
    Sold
} 
