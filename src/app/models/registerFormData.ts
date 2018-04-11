export class RegisterFormData {
	firstName: string = '';
	lastName: string = '';
	userName: string = '';
	email: string = '';
	password: string = '';

	street: string = '';
	city: string = '';
	postalCode: string = '';
	country: string = '';

	mobilePhone: string = '';
	homePhone: string = '';
	workPhone: string = '';
	emergencyContactOnePhone: string = '';
	emergencyContactTwoPhone: string = '';

	sailingQualifications: string = '';
	skills: string = '';
	sailingExperience: string = '';

	clear() {
		this.firstName = '';
		this.lastName = '';
		this.email = '';
		this.userName = '';

		this.street = '';
		this.city = '';
		this.country = '';
		this.postalCode = '';
		this.country = '';

		this.homePhone = '';

	}
}

export class Personal {
	firstName: string = '';
	lastName: string = '';
	userName: string = '';
	email: string = '';
	password: string = '';
}

export class Address {
	street: string = '';
	city: string = '';
	country: string = '';
	zip: string = '';
}

export class Phone {

	mobilePhone: string = '';
	homePhone: string = '';
	workPhone: string = '';
	emergencyContactOnePhone: string = '';
	emergencyContactTwoPhone: string = '';

}

export class Sailing {

	sailingQualifications: string = '';
	skills: string = '';
	sailingExperience: string = '';

}
