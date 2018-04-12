import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-row',
  templateUrl: './member-row.component.html',
  styleUrls: ['./member-row.component.css']
})
export class MemberRowComponent implements OnInit {

    @Input() member: Member;
    
  constructor() { }

  ngOnInit() {
  }

}
