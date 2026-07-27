import { Component } from '@angular/core';

interface HairTreatment {
  id: number;
  number: string;
  title: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-treatments',
  imports: [],
  templateUrl: './treatments.html',
  styleUrl: './treatments.scss',
})
export class Treatments {
  readonly treatments: HairTreatment[] = [
    {
      id: 1,
      number: '01',
      title: 'Nutriciones',
      description:
        'Tratamientos personalizados para devolver suavidad, brillo y vitalidad al cabello.',
      benefits: [
        'Mayor suavidad y brillo',
        'Cabello más manejable',
        'Cuidado adaptado a cada necesidad',
      ],
    },
    {
      id: 2,
      number: '02',
      title: 'Células madre',
      description:
        'Una propuesta de cuidado profundo para cabellos sensibilizados, opacos o debilitados.',
      benefits: [
        'Recuperación profunda',
        'Mejora de la apariencia del cabello',
        'Más fuerza, suavidad y movimiento',
      ],
      featured: true,
    },
  ];
}