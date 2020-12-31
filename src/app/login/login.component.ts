import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../_services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

   constructor(
         private route: ActivatedRoute,
         private router: Router,
         private authentificationService: AuthentificationService,

   ) { }

   ngOnInit(): void {
      this.initForm();
   }
    get f() { return this.loginForm.controls; }

   onSubmit(){
      this.authentificationService.login(this.f.username.value, this.f.password.value)
      .subscribe({
        next:()=>{
          console.log(this.authentificationService.getToken());
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
          this.authentificationService.decodeToken();

        }
      })
    }
    private initForm(){
       this.loginForm= new FormGroup({
          'username': new FormControl(null, Validators.required),
          'password': new FormControl(null, Validators.required)
       })
    }
}
