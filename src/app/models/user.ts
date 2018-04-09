export class User {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public street?: string,
        public city?: string,
        public postalCode?: string,
        public country?: string,
        public mobilePhone?: string,
        public homePhone?: string,
        public workPhone?: string,
        public emergencyContactOnePhone?: string,
        public emergencyContactTwoPhone?: string,
        public sailingQualifications?: string,
        public skills?: string,
        public sailingExperience?: string, 
        public userName?: string,
        public email?: string,
        public password?: string,
    ){}

}