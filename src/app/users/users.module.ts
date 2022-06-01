import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import { UserComponent } from './users-components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./users-services/user.service";
import { UserDetailsComponent } from './users-components/user-details/user-details.component';
import {UsersResolver} from "./users-services/users-resolvers/users.resolver";
import {UserResolver} from "./users-services/users-resolvers/user.resolver";
import {UsersActivatorGuard} from "./users-services/users-guards/users-activator.guard";
import {UserActivatorGuard} from "./users-services/users-guards/user-activator.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UsersResolver,
    UserResolver,
    UsersActivatorGuard,
    UserActivatorGuard
  ]
})
export class UsersModule { }
