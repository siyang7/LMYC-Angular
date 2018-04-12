import { FleetService } from './../services/fleet.service';

import { Component, OnInit, Input } from '@angular/core';
import { Boat, BoatStatus } from '../models/boat';

@Component({
	selector: 'app-fleet',
	templateUrl: './fleet.component.html',
	styleUrls: ['./fleet.component.css'],
	providers: [FleetService]
})
export class FleetComponent implements OnInit {

	@Input() boats: Boat[];
    @Input() boat: Boat;
	imageData: any;

	constructor(private fleetService: FleetService) { }

	ngOnInit() {
		this.fleetService.getFleets().subscribe(
            b => this.boats = b);
	}
}
