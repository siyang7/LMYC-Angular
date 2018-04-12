import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../models/member'

@Component({
	selector: 'app-members-table',
	templateUrl: './members-table.component.html',
	styleUrls: ['./members-table.component.css']
})
export class MembersTableComponent implements OnInit {

    @Input() members: Member<any>[] = [];

	constructor() { }

	ngOnInit() {

	}

}
