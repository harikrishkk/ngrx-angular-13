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

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log("Log actions ===> Send some analytics data", action.type)
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      network: networkReducer
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    UsersModule,
    EffectsModule.forRoot([UsersEffects, NotificationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
