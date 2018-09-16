import { Component, OnInit } from '@angular/core';
// import { filter } from 'rxjs/operators';
 import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_:NavigationEnd) => {
      if (!!_.url){
        this.currentUrl = _.url
      }
    });
    // router.events.pipe(filter((event2: Event) => event2 instanceof NavigationEnd )).subscribe((_: NavigationEnd) => this.currentUrl = _.url );
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
  }

  ngOnInit() {
  }

}
