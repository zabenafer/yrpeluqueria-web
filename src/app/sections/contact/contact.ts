import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly whatsappUrl =
    'https://wa.me/5493530000000?text=Hola%20Yuli,%20quisiera%20consultar%20por%20un%20turno.';

  readonly instagramUrl =
    'https://www.instagram.com/yuliresserpeluqeria/';
}