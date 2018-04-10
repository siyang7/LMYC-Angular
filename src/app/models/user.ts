export interface IUser {
    firstName: string,
    lastName: string,
    street: string,
    city: string,
    postalCode: string,
    country: string,
    mobilePhone: string,
    homePhone: string,
    workPhone: string,
    emergencyContactOnePhone: string,
    emergencyContactTwoPhone: string,
    sailingQualifications: string,
    skills: string,
    sailingExperience: string, 
    userName: string,
    email: string,
    password: string,
}

export class IAuthentication {
    token_type: string;
    access_token: string;
    expires_in: number;
}
