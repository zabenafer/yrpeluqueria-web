import { Component } from '@angular/core';

interface HairService {
  number: string;
  title: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly services: HairService[] = [
    {
      number: '01',
      title: 'Reflejos',
      description:
        'Iluminación personalizada para aportar luz, movimiento y frescura al cabello.',
      featured: true,
    },
    {
      number: '02',
      title: 'Reflejos de diseño',
      description:
        'Técnicas adaptadas a tus facciones y estilo para lograr un resultado único.',
    },
    {
      number: '03',
      title: 'Babylights',
      description:
        'Aclaraciones finas y delicadas para conseguir un efecto natural y luminoso.',
      featured: true,
    },
    {
      number: '04',
      title: 'Balayage',
      description:
        'Una transición suave de color que aporta profundidad, brillo y movimiento.',
    },
    {
      number: '05',
      title: 'Baño de color',
      description:
        'Ideal para renovar el tono, realzar reflejos y devolverle brillo al cabello.',
    },
    {
      number: '06',
      title: 'Cortes y peinados',
      description:
        'Propuestas femeninas adaptadas a tu estilo y a cada ocasión especial.',
    },
  ];
}