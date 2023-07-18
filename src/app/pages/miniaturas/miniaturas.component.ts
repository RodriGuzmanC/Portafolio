import { Component } from '@angular/core';

@Component({
  selector: 'app-miniaturas',
  templateUrl: './miniaturas.component.html',
  styleUrls: ['./miniaturas.component.css']
})
export class MiniaturasComponent {
  imagesPaths:string[] = [
    '../../../assets/miniaturas/como cambiar idioma.png',
    '../../../assets/miniaturas/criaturas marinas.png',
    '../../../assets/miniaturas/datos sobre el espacio.png',
    '../../../assets/miniaturas/his8.png',
    '../../../assets/miniaturas/min_4.png',
    '../../../assets/miniaturas/min_5.png',
    '../../../assets/miniaturas/min_6.png',
    '../../../assets/miniaturas/min_9.png',
    '../../../assets/miniaturas/min_cur.png',
    '../../../assets/miniaturas/space.png',
    '../../../assets/miniaturas/Untitled.png'
  ]
}
