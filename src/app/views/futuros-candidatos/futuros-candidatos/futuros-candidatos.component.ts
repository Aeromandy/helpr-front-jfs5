import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FuturoCandidatoService } from 'src/app/services/futuro-candidato.service';
import { FuturoCandidato } from './../../../models/futuro-candidato';

@Component({
  selector: 'app-futuros-candidatos',
  templateUrl: './futuros-candidatos.component.html',
  styleUrls: ['./futuros-candidatos.component.css']
})
export class FuturosCandidatosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'descricao', 'setor', 'editar', 'excluir'];
  futuroCandidato: FuturoCandidato[] = [];
  dataSource = new MatTableDataSource<FuturoCandidato>(this.futuroCandidato);
  constructor(
    private futuroCandidatoService: FuturoCandidatoService 
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.futuroCandidatoService.findAll().subscribe(futuroCandidato => {
      this.dataSource = new MatTableDataSource<FuturoCandidato>(futuroCandidato);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 

}