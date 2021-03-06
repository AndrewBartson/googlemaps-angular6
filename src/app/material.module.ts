import { NgModule } from "@angular/core";
import { MatButtonModule,  MatExpansionModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}
