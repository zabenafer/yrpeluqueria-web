import { Component } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  message: string;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Camila',
      service: 'Reflejos',
      message:
        'Me encantó el resultado. Yuli entendió exactamente lo que quería y me asesoró durante todo el proceso.',
      initials: 'C',
    },
    {
      id: 2,
      name: 'Agustina',
      service: 'Babylights',
      message:
        'La atención fue hermosa y el color quedó súper natural. Me sentí muy cómoda desde que llegué.',
      initials: 'A',
    },
    {
      id: 3,
      name: 'Martina',
      service: 'Nutrición capilar',
      message:
        'Mi pelo quedó mucho más suave y con brillo. Se nota la dedicación y el cuidado en cada detalle.',
      initials: 'M',
    },
  ];
}