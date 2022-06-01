import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users-components/users/users.component";
import {UserDetailsComponent} from "./users-components/user-details/user-details.component";
import {UserResolver} from "./users-services/users-resolvers/user.resolver";
import {UsersResolver} from "./users-services/users-resolvers/users.resolver";
import {UsersActivatorGuard} from "./users-services/users-guards/users-activator.guard";
import {UserActivatorGuard} from "./users-services/users-guards/user-activator.guard";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {usersData: UsersResolver},
    canActivate: [UsersActivatorGuard],
    canDeactivate: [UsersActivatorGuard],
    children: [
      {path: 'user-details/:id', component: UserDetailsComponent,
        resolve: {userData: UserResolver},
        canActivate: [UserActivatorGuard],
        canDeactivate: [UserActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
