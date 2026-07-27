import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  alt: string;
  image: string | null;
  tone: 'nude' | 'rose' | 'cocoa';
  featured?: boolean;
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Iluminación natural',
      category: 'Reflejos',
      alt: 'Trabajo de reflejos realizado en YR Peluquería',
      image: null,
      tone: 'nude',
      featured: true,
    },
    {
      id: 2,
      title: 'Luz y movimiento',
      category: 'Babylights',
      alt: 'Trabajo de babylights realizado en YR Peluquería',
      image: null,
      tone: 'rose',
    },
    {
      id: 3,
      title: 'Color personalizado',
      category: 'Balayage',
      alt: 'Trabajo de balayage realizado en YR Peluquería',
      image: null,
      tone: 'cocoa',
    },
    {
      id: 4,
      title: 'Brillo renovado',
      category: 'Baño de color',
      alt: 'Trabajo de baño de color realizado en YR Peluquería',
      image: null,
      tone: 'rose',
    },
    {
      id: 5,
      title: 'Cuidado profundo',
      category: 'Nutrición',
      alt: 'Resultado de nutrición capilar en YR Peluquería',
      image: null,
      tone: 'nude',
    },
    {
      id: 6,
      title: 'Estilo para cada ocasión',
      category: 'Peinados',
      alt: 'Peinado femenino realizado en YR Peluquería',
      image: null,
      tone: 'cocoa',
    },
  ];
}