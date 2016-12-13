import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './editors.routing';
import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
 import { RestService } from  './components/ckeditor/rest.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Editors,
    Ckeditor
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    
    RestService
  ]
})
export default class EditorsModule {
}
