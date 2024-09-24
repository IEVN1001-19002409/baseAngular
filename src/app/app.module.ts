import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe  // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule  // Importa FormsModule para usar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
