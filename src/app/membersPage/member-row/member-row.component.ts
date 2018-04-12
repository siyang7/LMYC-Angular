import { Component, OnInit, Input } from '@angular/core';

import { IRoleMember } from '../../models/IRoleMember'

@Component({
  selector: 'app-member-row',
  templateUrl: './member-row.component.html',
  styleUrls: ['./member-row.component.css']
})
export class MemberRowComponent implements OnInit {

    @Input() member: IRoleMember;

  constructor() { }

  ngOnInit() {
  }

}
