import { Component, OnInit, Input } from '@angular/core';
import { IRoleMember } from '../../models/IRoleMember'

@Component({
	selector: 'app-members-table',
	templateUrl: './members-table.component.html',
	styleUrls: ['./members-table.component.css']
})
export class MembersTableComponent implements OnInit {

    @Input() members: IRoleMember[] = [];

	constructor() { }

	ngOnInit() {

	}

}
