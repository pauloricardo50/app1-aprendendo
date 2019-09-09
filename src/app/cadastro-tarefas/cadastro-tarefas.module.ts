import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroTarefasPage } from './cadastro-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroTarefasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroTarefasPage]
})
export class CadastroTarefasPageModule {}
