import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    DistanciaComponent  // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Importa FormsModule para usar [(ngModel)] si es necesario
    ReactiveFormsModule  // Si estás usando formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
