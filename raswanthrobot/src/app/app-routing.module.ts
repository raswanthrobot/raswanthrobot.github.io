import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
 { path:'projects',component:ProjectsComponent},
 {path:'research',component:ResearchComponent},
 {path:'publications',component:PublicationsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
