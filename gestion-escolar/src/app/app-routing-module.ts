import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  //Ruta Pública: Login
  { path: 'login', component: LoginComponent },

  //Ruta Protegida: Layout con Menú
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-module').then(m => m.DashboardModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./pages/cursos/cursos-module').then(m => m.CursosModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios-module').then(m => m.UsuariosModule),
        canActivate: [RoleGuard],
        data: { role: 'admin' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  //Ruta Comodín (404) 
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }