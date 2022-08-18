import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RouterModule } from '@angular/router';
import { routes } from './character.routing';

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CharacterModule {}
