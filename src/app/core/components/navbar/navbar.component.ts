import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomepageService } from 'src/app/features/services/homepage.service';
import { Auth } from '../../../features/models/authentication.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  textVisible: boolean;
  textVisibleNav: boolean;
  loggedAs!: string;
  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }

  constructor(private hs: HomepageService, private router: Router, private route: ActivatedRoute) {
    this.textVisible = hs.isTextVisible;
    this.textVisibleNav = hs.isTextVisibleNav;
  } 
  ngOnInit(){
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs;
            if(this.loggedAs !='Unauthenticated' && this.isTextVisible == false || this.loggedAs == 'Unauthenticated' && this.isTextVisible == true)
            { 
              this.toggleText();this.loggedAs;
              if(this.loggedAs == 'Professor' || this.loggedAs == 'Administrador' && this.isTextVisibleNav == false)
              {
                  this.ToggleTextNav();
                
              } 
            }      
        }, error: (err) => {
            console.error(err);
        }
    })
  };
  //Gets the current variable status
  get isTextVisible(): boolean {
    return this.hs.isTextVisible;
  }
  //Gets the current variable status nav
  get isTextVisibleNav(): boolean {
    return this.hs.isTextVisibleNav;
  }
  //Calls service function to hide infobox
  toggleText() {
    this.hs.toggleTextVisibility();
  }

  ToggleTextNav(){
    this.hs.toggleTextVisibilityNav();
  }

}
