import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HomepageService } from '../services/homepage.service';
import { ActivatedRoute } from '@angular/router';
import { Auth } from '../models/authentication.model';
  
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  textVisible: boolean = true;
  textVisibleNav: boolean = true;
  errorText: boolean = true;
  _textSubscription: any;
  loggedAs!: string;
  error!: string;

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }

  constructor(public hs: HomepageService, private router: Router, private route: ActivatedRoute) {
    this.textVisible = hs.isTextVisible;
    this.textVisibleNav = hs.isTextVisibleNav;
    this.errorText = hs.isErrorTextVisible;
  }
  
  //ON BUTTON CLICK THIS ACTIVATES AND CHANGES THE USER
  setLoggedAs(role: string) {
    this.loggedAs = role; // Set the variable to role
    //Sets model with new auth user
    this.authDetails.authAs = role;

    if(role != 'Unauthenticated') 
      this.authDetails.isAuth = 1;
    else
      this.authDetails.isAuth = 0;

    //Sets auth in DB
    this.hs.setAuth(this.authDetails, 1).subscribe({
      next: (response) => {
        if(this.loggedAs == 'Unauthenticated' && this.isTextVisible == true || this.loggedAs != 'Unauthenticated' && this.isTextVisible == false)
          this.toggleText();
          if(this.loggedAs == 'Aluno' && this.isTextVisibleNav == true)
            this.toggleTextNav();
          if((this.loggedAs == 'Professor' || this.loggedAs == 'Administrador') && this.isTextVisibleNav == false)
            this.toggleTextNav();
        
      }
    })

  }

  //Publishes the variables from the service to HTML check if text can be shown
  ngOnInit(): void {
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs;
            if(this.loggedAs !='Unauthenticated' && this.isTextVisible == false || this.loggedAs == 'Unauthenticated' && this.isTextVisible == true)
            this.loggedAs;
            this.toggleText();

            
        }, error: (err) => {
            if(!err.ok)this.error = "Can't reach API";
            this.error;
            this.toggleErrorText();
        }
    }
    )
    document.body.className = "bg-homepage";
  }


  ngOnDestroy(){
    document.body.className="";
  }

  //Gets the current variable status
  get isTextVisible(): boolean {
    return this.hs.isTextVisible;
  }
  //Gets the current variable status nav
  get isTextVisibleNav(): boolean {
    return this.hs.isTextVisibleNav;
  }
  get isErrorTextVisible(): boolean {
    return this.hs.isErrorTextVisible;
  }
  //Calls service function to hide infobox
  toggleText() {
    this.hs.toggleTextVisibility();
  }
  toggleTextNav() {
    this.hs.toggleTextVisibilityNav();
  }
  toggleErrorText() {
    this.hs.toggleErrorTextVisibility();
  }

}






