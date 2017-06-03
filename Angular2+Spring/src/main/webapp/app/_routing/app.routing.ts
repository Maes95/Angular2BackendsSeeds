import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app/app.component';
import { ExampleComponent } from '../components/example/example.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
