import { MoviesEffects } from './movies/state/movies.effects';
import { AppState } from './state/app.state';
import { inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { networkReducer } from './state/network.reducer';

import { UsersModule } from './users/users.module';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/users.effects';
import { NotificationEffects } from './state/notification.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MoviesComponent } from './movies/movies.component';
import { movieReducer } from './movies/state/movies.reducer';
import { MoviesModule } from './movies/movies.module';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { ColorsComponent } from './colors/colors.component';
import { entityConfig } from './colors/entity-metadata';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log("Log actions ===> Send some analytics data", action.type)
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://api.sampleapis.com/csscolornames/',
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MoviesModule,
    StoreModule.forRoot({
      network: networkReducer,
      router: routerReducer,
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    UsersModule,
    EffectsModule.forRoot([UsersEffects, NotificationEffects]),
    StoreRouterConnectingModule.forRoot(),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: defaultDataServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
