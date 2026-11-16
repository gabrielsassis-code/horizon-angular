import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layouts/footer/footer';
import { Nav } from './layouts/nav/nav';

@Component({
  imports: [RouterOutlet, Nav, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
