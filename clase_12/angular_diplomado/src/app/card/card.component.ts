import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title: string = "Card title"
  text: string = "Some quick example text to build on \
  the card title and make up the bulk of the card's content."
  button: string = "Go somewhere"
}
