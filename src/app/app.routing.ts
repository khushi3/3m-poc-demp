import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/editors/ckeditor' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
