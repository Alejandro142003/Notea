import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesService } from './services/notes.service';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { LoginService } from './services/login.service';
import { GoogleSigninButtonDirective } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonComponent, NavbarComponent],
  providers: [
    NotesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '470513804122-057j7h3fu18pqmggj0lijn10024d8as0.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    LoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
