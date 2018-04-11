import { IUser } from './user';

import { Boat } from './boat';

export interface IReservation {

        ReservationId: string,
        CreatedBy: string,
        User: IUser,
        ReservedBoat: string,
        Boat: Boat,
        StartDateTime: Date,
        EndDateTime: Date,
        MemberCrew: IUser[],
        NonMemberCrew: IUser[],
        Itinerary: string,
        AllocatedCredit: number,
        AllocatedHours: number
}
