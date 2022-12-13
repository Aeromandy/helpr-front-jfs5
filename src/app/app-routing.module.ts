import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule),
    title: "Helpr | Login"
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    title: "Helpr | Home"
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule), 
    canActivate: [AuthGuard],
    title: "Helpr | Clientes"
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [AuthGuard],
    title: "Helpr | Chamados"
  },
  { 
    path: 'funcionarios', 
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    canActivate: [AuthGuard],
    title: "Helpr | Funcionarios"
  },
  {
    path: 'cargos',
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    canActivate: [AuthGuard],
    title: "Helpr | Cargos"
  },
  { 
    path: 'futuros-clientes', 
    loadChildren: () => import('./views/futuros-clientes/futuros-clientes.module').then(m => m.FuturosClientesModule),
    canActivate: [AuthGuard],
    title: "Helpr | Futuros Clientes"
  },
  { 
    path: 'futuros-candidatos', 
    loadChildren: () => import('./views/futuros-candidatos/futuros-candidatos.module').then(m => m.FuturosCandidatosModule),
    canActivate: [AuthGuard],
    title: "Helpr | Futuros Candidatos"
  },
  { 
    path: 'faq', 
    loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule),
    title: "Helpr | FAQ"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
