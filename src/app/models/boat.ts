export class Boat {
    boatId: string;
    boatName: string;
    boatStatus: string;
    boatPicture: Uint8Array;
    boatDescription: string;
    boatLength: number;
    boatMake: string;
    boatYear: number;
    creditsPerHourOfUsage: number;

    constructor(boatId: string,
        boatName: string,
        boatStatus: string,
        boatPicture: Uint8Array,
        boatDescription: string,
        boatLength: number,
        boatMake: string,
        boatYear: number,
        creditsPerHourOfUsage: number)
        {
        this.boatId = boatId;
        this.boatName = boatName;
        this.boatStatus = boatStatus;
        this.boatPicture = boatPicture;
        this.boatDescription = boatDescription;
        this.boatLength = boatLength;
        this.boatMake = boatMake;
        this.boatYear = boatYear;
        this.creditsPerHourOfUsage = creditsPerHourOfUsage;
    }
}

export enum BoatStatus{
    OutOfService,
    Operational,
    Scrapped,
    Sold
} 
