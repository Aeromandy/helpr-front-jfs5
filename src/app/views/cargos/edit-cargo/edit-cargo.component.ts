import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {

  public cargo: Cargo = {
    nome: '',
    descricao: '',
    salario: ''
  };

  constructor(
    private route: ActivatedRoute,
    private cargoService: CargoService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
  }

  private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.cargoService.findById(id).subscribe(cargo => {
        this.cargo = cargo;
      });
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid) {
      this.cargoService.update(this.cargo).subscribe(() => {
        this.toastr.success("Cargo editado.");
        this.router.navigate(["/cargos"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }
}
