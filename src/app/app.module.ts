import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

// ANGULAR MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { environment } from '../environments/environment.development';
import { CrudComponent } from './pages/crud/crud.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

import { MatDialogModule } from '@angular/material/dialog';

import { AngularFireModule } from '@angular/fire/compat';
import { ModalViewUserComponent } from './pages/crud/modal-view-user/modal-view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CrudComponent,
    ModalViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ANGULAR MATERIAL
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({ "projectId": "crud-usuarios-angular-17370", "appId": "1:404381055904:web:c2fcda27347a92e63e02c5", "storageBucket": "crud-usuarios-angular-17370.firebasestorage.app", "apiKey": "AIzaSyDGLWhx6kpRnhfJ64i86pAwu5eGW7eYbt4", "authDomain": "crud-usuarios-angular-17370.firebaseapp.com", "messagingSenderId": "404381055904" })),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
