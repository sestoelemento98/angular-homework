import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColoredObjectsComponent } from './components/bai-tap-buoi-2/colored-object/colored-objects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HookDemoComponent } from './components/bai-tap-buoi-2/hook-demo/hook-demo/hook-demo.component';
import { MathExpressionComponent } from './components/bai-tap-buoi-2/math-expression/math-expression/math-expression.component';
import { InsertDashComponent } from './components/bai-tap-buoi-2/insert-dash/insert-dash.component';
import { StudentInfoComponent } from './components/bai-tap-buoi-2/student-info/student-info.component';
import { ColoredObjectChildComponent } from './components/bai-tap-buoi-3/colored-object-child/colored-object-child.component';
import { ReactiveFormParentComponent } from './components/bai-tap-buoi-3/reactive-form-parent/reactive-form-parent/reactive-form-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoredObjectsComponent,
    HookDemoComponent,
    MathExpressionComponent,
    InsertDashComponent,
    StudentInfoComponent,
    ColoredObjectChildComponent,
    ReactiveFormParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
