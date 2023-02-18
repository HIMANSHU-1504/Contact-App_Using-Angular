import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path:"",component:ContactListComponent},
  {path:"list",component:ContactListComponent},
  {path:"add",component:ContactAddComponent},
  {path:"edit",component:ContactEditComponent},
  {path:"details",component:ContactDetailsComponent},
  {path:"**",component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
