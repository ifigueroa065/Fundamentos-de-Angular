export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string; //el ? hace que la categoría sea opcional
}

