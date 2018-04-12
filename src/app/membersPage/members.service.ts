import { Injectable } from '@angular/core';

import { IRoleMember } from '../models/IRoleMember';

@Injectable()
export class MembersService {

	getMembers() {

		let members: IRoleMember[] = [

			new IRoleMember({
				userId: 'string',
			    firstName: 'string',
			    lastName: 'string',
			    role: 'string',
			    email: 'string',
			    homePhone: 'string',
			    mobilePhone: 'string'
			}),

			new IRoleMember({
				userId: 'string',
			    firstName: 'string',
			    lastName: 'string',
			    role: 'string',
			    email: 'string',
			    homePhone: 'string',
			    mobilePhone: 'string'
			}),

			new IRoleMember({
				userId: 'string',
			    firstName: 'string',
			    lastName: 'string',
			    role: 'string',
			    email: 'string',
			    homePhone: 'string',
			    mobilePhone: 'string'
			}),

			new IRoleMember({
				userId: 'string',
			    firstName: 'string',
			    lastName: 'string',
			    role: 'string',
			    email: 'string',
			    homePhone: 'string',
			    mobilePhone: 'string'
			}),

			new IRoleMember({
				userId: 'string',
			    firstName: 'string',
			    lastName: 'string',
			    role: 'string',
			    email: 'string',
			    homePhone: 'string',
			    mobilePhone: 'string'
			}),

		];

		return members;
	}
}
