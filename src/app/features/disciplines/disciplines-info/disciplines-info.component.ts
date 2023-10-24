import { Component } from '@angular/core';
import { DisciplinesService } from '../../services/disciplines.service';
import { HomepageService } from '../../services/homepage.service';
import { Auth } from '../../models/authentication.model';
import { DisciplineInfo } from '../../models/discipline-info.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-disciplines-info',
  templateUrl: './disciplines-info.component.html',
  styleUrls: ['./disciplines-info.component.scss']
})
export class DisciplinesInfoComponent {
  disciplineInfo: DisciplineInfo[] = [];
  loggedAs!: string;
  error!: string;

  authDetails: Auth = {
    id: 0,
    authAs: '',
    isAuth: 0,
  }

  constructor(private DisciplineService: DisciplinesService, private hs: HomepageService, private route: ActivatedRoute, private router: Router){  }
 
  ngOnInit(): void {
    
    this.hs.getAuth().subscribe(
      {
        next: (data) => {
            this.authDetails = data;
            this.loggedAs = this.authDetails.authAs; 

              this.route.paramMap.subscribe({
                next: (params) => {
                  console.log(params);
                  let id = Number(params.get('id'));
                  if(id != 0){
                    this.DisciplineService.getDisciplineInfo(id).subscribe({
                      next: (disciplines) => {
                        disciplines.forEach(element => {
                              this.disciplineInfo = disciplines;
                              console.log(this.disciplineInfo);
                       });
                      },
                      error: (response) => {
                        console.log(response);
                      }
                    });
                  }
                }
              })       
        }, error: (err) => {
          if(!err.ok)this.error = err.ok;
          this.error;
        }
    });

  }

}
 