import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ActionCardListComponent} from './action-card-list/action-card-list.component';
import {TaskCardListComponent} from './task-card-list/task-card-list.component';
import {StepCardListComponent} from './step-card-list/step-card-list.component';
import {WorkflowCardListComponent} from './workflow-card-list/workflow-card-list.component';
import {SignupComponent} from './signup/signup.component';
import {ActionNewComponent} from './action-new/action-new.component';

const routes: Routes = [

    {
        path: 'action',
        component: ActionCardListComponent
    },
    {
      path: 'action/create',
      component: ActionNewComponent
    },
    {
        path: 'action/:id',
        children: [
          {
            path: '',
            component: ActionCardListComponent
          }
        ]
    },
    {
        path: 'step',
        component: StepCardListComponent
    },

    {
        path: 'task',
        component: TaskCardListComponent
    },

    {
        path: 'workflow',
        component: WorkflowCardListComponent
    },
    {
        path: 'home',
        component: HomeComponent

    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
