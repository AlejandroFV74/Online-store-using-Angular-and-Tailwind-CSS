import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {Header} from '../header/header';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Header, Router],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
