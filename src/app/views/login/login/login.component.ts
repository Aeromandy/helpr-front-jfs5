import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CreateFuturoCandidatoComponent } from '../create-futuro-candidato/create-futuro-candidato.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false; */
  
  

  public formLogin: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
   
  ) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    });
  }

 
  ngOnInit(): void {
  }

  public signIn(): void {
    if(this.formLogin.valid) {
      // PROCESSO DE AUTENTICAR
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response => {
        this.toastr.success("Bem-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }

  addCandidato(): void {
    const dialogRef = this.dialog.open(CreateFuturoCandidatoComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
