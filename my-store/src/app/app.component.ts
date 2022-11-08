import { Component } from '@angular/core';

//aca importo modelos
import {Product} from './product.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name='isai';
  age= 21;
  img='https://source.unsplash.com/random';
  btnDisabled=true;
  person={
    name: "isai figueroa",
    age: 21,
    avatar:'https://source.unsplash.com/random'
  }
  widthImg=10;
  emojis = [ '😂' , '🐦', '🐳','🌮', '💚']
  newName='';
  box={
    width:100,
    height : 100,
    background : 'red'
  }

  register={
    name:'',
    email:'',
    password:''
  }
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]



  toggleButton(){
    this.btnDisabled=!this.btnDisabled;
  }

  increaseAge(){
    this.person.age+=1;
  }

  onScroll(event : Event){
    const element=event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event : Event){
    const element=event.target as HTMLInputElement;
    this.person.name=element.value;
    console.log(element.value)
  }
  addName(){
    this.emojis.push(this.newName)
    this.newName='';
  }

  deleteName(index: number){
    this.emojis.splice(index,1)
  }

  onRegister(){
    console.log(this.register)
  }
}
