import { Boat } from './boat';
import { IUser } from './user'
export class Reservation {
    constructor(
        ReservationId?: string,
        CreatedBy?: string,
        User?: IUser,
        ReservedBoat?: string,
        Boat?: Boat,
        StartDateTime?: Date,
        EndDateTime?: Date,
        MemberCrew?: IUser[],
        NonMemberCrew?: IUser[],
        Itinerary?: string,
        AllocatedCredit?: number,
        AllocatedHours?: number
    ){}

}
