import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  exports: [
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule {

  // custom icons integration
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('available', domSanitizer.bypassSecurityTrustResourceUrl('/../../assets/icon-available.svg'));
    matIconRegistry.addSvgIcon('busy', domSanitizer.bypassSecurityTrustResourceUrl('/../../assets/icon-busy.svg'));
    matIconRegistry.addSvgIcon('search', domSanitizer.bypassSecurityTrustResourceUrl('/../../assets/icon-search.svg'));
  }
}
