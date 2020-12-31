import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestionUtilisateurComponent } from './admin/gestion-utilisateur/gestion-utilisateur.component';
import { AddProfilComponent } from './admin/gestion-utilisateur/profil/add-profil/add-profil.component';
import { EditProfilComponent } from './admin/gestion-utilisateur/profil/edit-profil/edit-profil.component';
import { ProfilComponent } from './admin/gestion-utilisateur/profil/profil.component';
import { AddUserComponent } from './admin/gestion-utilisateur/users/add-user/add-user.component';
import { EditUserComponent } from './admin/gestion-utilisateur/users/edit-user/edit-user.component';
import { UsersComponent } from './admin/gestion-utilisateur/users/users.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { CompetenceComponent } from './competence/competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { AddGroupeCompetenceComponent } from './groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { EditGroupeCompetenceComponent } from './groupe-competence/edit-groupe-competence/edit-groupe-competence.component';
import { GroupeCompetenceComponent } from './groupe-competence/groupe-competence.component';
import { ListGroupeCompetenceComponent } from './groupe-competence/list-groupe-competence/list-groupe-competence.component';
import { GroupeTagComponent } from './groupe-tag/groupe-tag.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParametresComponent } from './parametres/parametres.component';
import { AddProfilSortieComponent } from './profil-sortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './profil-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { PromoComponent } from './promo/promo.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { ReferentielComponent } from './referentiel/referentiel.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
    children:[
      { path: 'gestionUser', component: GestionUtilisateurComponent,
      
      children: [
        { path: 'profil', component: ProfilComponent,
          children:[
            { path: ':id/edit', component: EditProfilComponent },
             { path: 'add', component: AddProfilComponent }
          ]
      },
        { path: 'user', component: UsersComponent,
          children:[
            { path: ':id/edit', component: EditUserComponent },
            { path: 'add', component: AddUserComponent }
          ]
      },
      ]
    },
    ]
},


  { path: 'parametres', component: ParametresComponent,
      children:[
        { path: 'promo', component: PromoComponent,
          children:[
            { path: 'add', component: AddPromoComponent },
            //{ path: 'list', component: ListPromoCompnent },
          ]
      },
    { path: 'profilSortie', component: ProfilSortieComponent,
        children:[
          { path: ':id/edit', component: EditProfilSortieComponent },
          { path: 'add', component: AddProfilSortieComponent }

        ]
  },
    { path: 'referentiel', component: ReferentielComponent,
        children: [
          { path: ':id/edit', component: EditReferentielComponent },
          { path: 'add', component: AddReferentielComponent },
          { path: 'list', component: ListReferentielComponent },

        ]
  },
    { path: 'competence', component: CompetenceComponent,
      children:[
        { path: 'list', component: ListCompetenceComponent},
        { path: 'add', component: AddCompetenceComponent},
        { path: ':id/edit', component: EditCompetenceComponent },
    ]
  },
    { path: 'grpCompetence', component: GroupeCompetenceComponent,
      children:[
        { path: 'list', component: ListGroupeCompetenceComponent},
        { path: 'add', component: AddGroupeCompetenceComponent},
        { path: ':id/edit', component: EditGroupeCompetenceComponent },
      ]
    },
    { path: 'grpTag', component: GroupeTagComponent },

  ]
},

  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
