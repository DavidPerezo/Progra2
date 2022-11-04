import { Component, NgModule } from '@angular/core';
import { Usuario } from './models/usuario';
import {FormsModule} from '@angular/forms'
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  UsuarioArray: Usuario[] = [
   {codigo: 1, nombre: "Silla", descripcion: "Hecho en Bolivia", dim: "A", color: "Rojo", materialesID: "1"},
   {codigo: 2, nombre: "Mesa", descripcion: "Hecho en Bolivia", dim: "A", color: "Azul", materialesID: "2"},
   {codigo: 3, nombre: "Ropero", descripcion: "Hecho en Bolivia", dim: "A", color: "Amarillo", materialesID: "3"}


  ];
  selectedUsuario: Usuario = new Usuario();
}
