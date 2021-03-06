import {Component, OnInit} from '@angular/core';

import {UserService} from '../../service/user.service'

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
})
export class ProfilePageComponent implements OnInit {

  // create all items for the list menu
  menu: Array<{ name: string, url: string }> = [
    {name: 'Settings', url: 'settings'},
    {name: 'Request mod rights', url: 'request_mod'},
    {name: 'Statistics', url: 'statistics'},
    {name: 'Ranking', url: 'ranking'}
  ]

  constructor(private user: UserService, private translate: TranslateService) {
    // for(let i = 0; i < this.menu.length; i++){
    //   this.translate.get(this.menu[i].name).subscribe(data => {
    //     this.menu[i].name = data})
    // }
  }

  ngOnInit() {

  }


}
