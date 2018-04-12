import { IUser } from './user';

import { Boat } from './boat';

export interface IReservation {
        bookingId: string,
        boatId: string,
        boatName: string,
        ReservedBoat: string,
        Boat: Boat,
        startDateTime: string,
        endDateTime: string,
        nonMemberCrews: string,
        itinerary: string,
        allocatedHours: string,
        userId: string,
        firstName: string,
        lastName: string,
        memberCrews: CrewMember[]
}

class CrewMember{
        constructor(
                name: string,
                roleName: string
        ){}
        
}

