import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-achor-scroll',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './achor-scroll.component.html',
  styleUrls: ['./achor-scroll.component.scss'],
})
export default class AchorScrollComponent {}
