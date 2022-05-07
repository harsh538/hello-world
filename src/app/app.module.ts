import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPipesPipe } from './Pipes/custom-pipes.pipe';
import { ElDirDirective } from './Directive/el-dir.directive'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ButtonClickComponent,
    CustomPipesPipe,
    ElDirDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }