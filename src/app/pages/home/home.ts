import { Component } from '@angular/core';
import { Header } from '../../core/header/header';
import { Footer } from '../../core/footer/footer';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Treatments } from '../../sections/treatments/treatments';
import { Gallery } from '../../sections/gallery/gallery';
import { AboutYuli } from '../../sections/about-yuli/about-yuli';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Hero,
    Services,
    Treatments,
    Gallery,
    AboutYuli,
    Testimonials,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}