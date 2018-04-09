
import { Boat } from './boat';
import { User } from './user';
export class Reservation {
    constructor(
        ReservationId?: string,
        CreatedBy?: string,
        User?: User,
        ReservedBoat?: string,
        Boat?: Boat,
        StartDateTime?: Date,
        EndDateTime?: Date,
        MemberCrew?: User[],
        NonMemberCrew?: User[],
        Itinerary?: string,
        AllocatedCredit?: number,
        AllocatedHours?: number
    ){}

}