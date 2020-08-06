import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcountrycasesComponent } from './allcountrycases/allcountrycases.component';
import { WorldComponent } from './world/world.component'
import { IndiacasesComponent } from './indiacases/indiacases.component'
import { MidpartComponent } from './midpart/midpart.component'
import { AboutComponent } from './about/about.component'
import { MylistComponent } from './mylist/mylist.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component:MidpartComponent},
  {path:"about",component:AboutComponent},
  {path:"worldcase",component:WorldComponent},
  {path:"indiacases",component:IndiacasesComponent},
  {path:"countrycases",component:AllcountrycasesComponent},
  {path:"mylist",component:MylistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
