import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-futuro-candidato',
  templateUrl: './create-futuro-candidato.component.html',
  styleUrls: ['./create-futuro-candidato.component.css']
})
export class CreateFuturoCandidatoComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(public dialogRef: MatDialogRef<CreateFuturoCandidatoComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
