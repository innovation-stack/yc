import { Component } from '@angular/core';

@Component({
  selector: 'yc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  title = 'Top Wear';

  products = [
    {
      id: 1,
      name: 'French Connection',
      color: 'blue',
      imageUrl: '/assets/products/men/french-connection.jpg'
    },
    {
      id: 2,
      name: 'Kook N Keech',
      color: 'white',
      imageUrl: '/assets/products/men/kook-n-keech.jpg'
    },
    {
      id: 3,
      name: 'Mast N Harbour',
      color: 'green',
      imageUrl: '/assets/products/men/mast-n-harbour.jpg'
    },
    {
      id: 4,
      name: 'Moda Rapido',
      color: 'red',
      imageUrl: '/assets/products/men/moda-rapido.jpg'
    },
    {
      id: 5,
      name: 'Nike',
      color: 'blue',
      imageUrl: '/assets/products/men/nike-india.jpg'
    },
    {
      id: 5,
      name: 'Roadster',
      color: 'blue',
      imageUrl: '/assets/products/men/roadster-blue.jpg'
    },
    {
      id: 6,
      name: 'Roadster',
      color: 'red',
      imageUrl: '/assets/products/men/roadster.jpg'
    },
    {
      id: 7,
      name: 'Superdy',
      color: 'green',
      imageUrl: '/assets/products/men/superdy.jpg'
    },
    {
      id: 8,
      name: 'Tommy Hillfiger',
      color: 'green',
      imageUrl: '/assets/products/men/tommy-hillfiger.jpg'
    },
    {
      id: 9,
      name: 'Wrogn',
      color: 'blue',
      imageUrl: '/assets/products/men/wrogn.jpg'
    }
  ];
}
