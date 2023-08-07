import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VotationsListComponent} from "../votations-list/votations-list.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [VotationsListComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
  exports: [VotationsListComponent]
})
export class VotationsModule {
}
