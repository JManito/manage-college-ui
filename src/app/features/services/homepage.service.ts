import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  baseApiUrl: string = environment.baseApiUrl;

  isTextVisible: boolean = false;
  isTextVisibleNav: boolean = false;
  isTextVisibleFooter: boolean = false;
  isErrorTextVisible: boolean = false;

  textVisibilityChange: Subject<boolean> = new Subject<boolean>();
  textVisibilityChangeNav: Subject<boolean> = new Subject<boolean>();
  textVisibilityChangeFooter: Subject<boolean> = new Subject<boolean>();
  textErrorVisibilityChange: Subject<boolean> = new Subject<boolean>();

  private sloggedAs = new Subject<any>();
  loggedAs = this.sloggedAs.asObservable();

  updateSloggedAs(newValue: any) {
    this.sloggedAs.next(newValue);
  }

  constructor(private http: HttpClient) { 
    
    this.textVisibilityChange.subscribe((value) => {
      this.isTextVisible = value
    });
    this.textVisibilityChangeNav.subscribe((value2) => {
      this.isTextVisibleNav = value2
    });
    this.textErrorVisibilityChange.subscribe((value3) => {
      this.isErrorTextVisible = value3
    });
    this.textVisibilityChangeFooter.subscribe((value4) => {
      this.isTextVisibleFooter = value4
    });
    
  } 

  getAuth(): Observable<Auth>{
    return this.http.get<Auth>(this.baseApiUrl + '/api/auth/');
  }
  setAuth(model: Auth, id: number): Observable<void>{
    return this.http.put<void>(this.baseApiUrl + '/api/auth/' + id, model);
  }

  toggleTextVisibility() {
      this.textVisibilityChange.next(!this.isTextVisible); 
  }
  toggleTextVisibilityNav() {
    this.textVisibilityChangeNav.next(!this.isTextVisibleNav); 
  }
  toggleTextVisibilityFooter() {
    this.textVisibilityChangeFooter.next(!this.isTextVisibleFooter); 
    
  }
  toggleErrorTextVisibility() {
    this.textErrorVisibilityChange.next(!this.isErrorTextVisible); 
  }
  
}
 