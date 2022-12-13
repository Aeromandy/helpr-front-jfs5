import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule), 
    canActivate: [AuthGuard]
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'funcionarios', 
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'cargos',
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'futuros-clientes', 
    loadChildren: () => import('./views/futuros-clientes/futuros-clientes.module').then(m => m.FuturosClientesModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'futuros-candidatos', 
    loadChildren: () => import('./views/futuros-candidatos/futuros-candidatos.module').then(m => m.FuturosCandidatosModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'faq', 
    loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
