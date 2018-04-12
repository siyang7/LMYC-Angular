export class IRoleMember {
    userId: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    homePhone: string;
    mobilePhone: string;

    constructor(options: {
        userId?: string,
        firstName?: string,
        lastName?: string,
        role?: string,
        email?: string,
        homePhone?: string,
        mobilePhone?: string
      } = {}) {
      this.userId = options.userId || '';
      this.lastName = options.lastName || '';
      this.firstName = options.firstName || '';
      this.role = options.role || '';
      this.email = options.email || '';
      this.mobilePhone = options.mobilePhone || '';
      this.homePhone = options.homePhone || '';
    }
}
