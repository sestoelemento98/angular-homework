import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoredObjectsComponent } from './components/bai-tap-buoi-2/colored-object/colored-objects.component';
import { HookDemoComponent } from './components/bai-tap-buoi-2/hook-demo/hook-demo/hook-demo.component';
import { InsertDashComponent } from './components/bai-tap-buoi-2/insert-dash/insert-dash.component';
import { MathExpressionComponent } from './components/bai-tap-buoi-2/math-expression/math-expression/math-expression.component';
import { StudentInfoComponent } from './components/bai-tap-buoi-2/student-info/student-info.component';
import { ColoredObjectChildComponent } from './components/bai-tap-buoi-3/colored-object-child/colored-object-child.component';
import { ReactiveFormParentComponent } from './components/bai-tap-buoi-3/reactive-form-parent/reactive-form-parent/reactive-form-parent.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'color-object', component: ColoredObjectsComponent},
  {path: 'insert-dash', component: InsertDashComponent},
  {path: 'math-expression', component: MathExpressionComponent},
  {path: 'student-info', component: StudentInfoComponent},
  {path: 'hook-demo', component: HookDemoComponent},
  {path: 'color-object-child', component: ColoredObjectChildComponent},
  {path: 'reactive-form-component', component: ReactiveFormParentComponent},
  {path: '', redirectTo:'/home-component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
