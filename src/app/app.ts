import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnapFaceList } from './snap-face-list/snap-face-list';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SnapFaceList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
