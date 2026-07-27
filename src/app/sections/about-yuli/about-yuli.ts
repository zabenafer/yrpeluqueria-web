import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-yuli',
  imports: [NgOptimizedImage],
  templateUrl: './about-yuli.html',
  styleUrl: './about-yuli.scss',
})
export class AboutYuli {
  readonly image: string | null = null;
}