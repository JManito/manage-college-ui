
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomepageService } from 'src/app/features/services/homepage.service';
import { Auth } from '../../../../features/models/authentication.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    sLoggedAs: any;
    textVisible: boolean;
    textVisibleFooter: boolean;
    loggedAs!: string;
    authDetails: Auth = {
      id: 0,
      authAs: '',
      isAuth: 0,
    }
  
    constructor(private hs: HomepageService, private router: Router, private route: ActivatedRoute) {
      this.textVisible = hs.isTextVisible;
      this.textVisibleFooter = hs.isTextVisibleFooter;
      this.hs.loggedAs.subscribe(value => {
        this.sLoggedAs = value;
      });
    } 
    ngOnInit(){ 
      this.hs.getAuth().subscribe(
        {
          next: (data) => {
              this.authDetails = data;
              this.loggedAs = this.authDetails.authAs;
              this.sLoggedAs = this.loggedAs;
              if(this.loggedAs !='Unauthenticated' && this.isTextVisible == false || this.loggedAs == 'Unauthenticated' && this.isTextVisible == true)
              { 
                this.toggleText();this.loggedAs;
                if(this.loggedAs == 'Professor' || this.loggedAs == 'Administrador' || this.isTextVisibleFooter == false)
                {
                    this.ToggleTextFooter();
                  
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
    get isTextVisibleFooter(): boolean {
      return this.hs.isTextVisibleFooter;
    }
    //Calls service function to hide infobox
    toggleText() {
      this.hs.toggleTextVisibility();
    }
  
    ToggleTextFooter(){
      this.hs.toggleTextVisibilityFooter();
    }  
  }
  