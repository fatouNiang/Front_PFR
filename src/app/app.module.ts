import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametresComponent } from './parametres/parametres.component';
import { PromoComponent } from './promo/promo.component'
import { ReferentielComponent } from './referentiel/referentiel.component';
import { CompetenceComponent } from './competence/competence.component';
import { GroupeCompetenceComponent } from './groupe-competence/groupe-competence.component';
import { GroupeTagComponent } from './groupe-tag/groupe-tag.component';
import { ListProfilSortieComponent } from './profil-sortie/list-profil-sortie/list-profil-sortie.component';
import { EditProfilSortieComponent } from './profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { ListGroupeCompetenceComponent } from './groupe-competence/list-groupe-competence/list-groupe-competence.component';
import { AddGroupeCompetenceComponent } from './groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { EditGroupeCompetenceComponent } from './groupe-competence/edit-groupe-competence/edit-groupe-competence.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilComponent } from './admin/gestion-utilisateur/profil/profil.component';
import { GestionUtilisateurComponent } from './admin/gestion-utilisateur/gestion-utilisateur.component';
import { UsersComponent } from './admin/gestion-utilisateur/users/users.component';
import { EditProfilComponent } from './admin/gestion-utilisateur/profil/edit-profil/edit-profil.component';
import { EditUserComponent } from './admin/gestion-utilisateur/users/edit-user/edit-user.component';
import { DetailUserComponent } from './admin/gestion-utilisateur/users/detail-user/detail-user.component';
import { ListUserComponent } from './admin/gestion-utilisateur/users/list-user/list-user.component';
import { AddUserComponent } from './admin/gestion-utilisateur/users/add-user/add-user.component';
import { AddProfilComponent } from './admin/gestion-utilisateur/profil/add-profil/add-profil.component';
import { ListProfilComponent } from './admin/gestion-utilisateur/profil/list-profil/list-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProfilComponent,
    ProfilSortieComponent,
    GestionUtilisateurComponent,
    NotFoundComponent,
    ParametresComponent,
    PromoComponent,
    UsersComponent,
    EditProfilComponent,
    EditUserComponent,
    DetailUserComponent,
    ListUserComponent,
    ReferentielComponent,
    CompetenceComponent,
    GroupeCompetenceComponent,
    GroupeTagComponent,
    ListProfilSortieComponent,
    EditProfilSortieComponent,
    AddProfilSortieComponent,
    AddPromoComponent,
    AddUserComponent,
    AddProfilComponent,
    ListGroupeCompetenceComponent,
    AddGroupeCompetenceComponent,
    AddCompetenceComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    EditGroupeCompetenceComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    EditReferentielComponent,
    ListProfilComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
