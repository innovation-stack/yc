import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Component({
  selector: 'yc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'Top Wear';
  products: ObservableArray<any>;

  constructor(
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.products = new ObservableArray<any>([
      {
        id: 1,
        name: 'French Connection',
        color: 'blue',
        imageUrl: '~/assets/products/men/french-connection.jpg'
      },
      {
        id: 2,
        name: 'Kook N Keech',
        color: 'white',
        imageUrl: '~/assets/products/men/kook-n-keech.jpg'
      },
      {
        id: 3,
        name: 'Mast N Harbour',
        color: 'green',
        imageUrl: '~/assets/products/men/mast-n-harbour.jpg'
      },
      {
        id: 4,
        name: 'Moda Rapido',
        color: 'red',
        imageUrl: '~/assets/products/men/moda-rapido.jpg'
      },
      {
        id: 5,
        name: 'Nike',
        color: 'blue',
        imageUrl: '~/assets/products/men/nike-india.jpg'
      },
      {
        id: 5,
        name: 'Roadster',
        color: 'blue',
        imageUrl: '~/assets/products/men/roadster-blue.jpg'
      },
      {
        id: 6,
        name: 'Roadster',
        color: 'red',
        imageUrl: '~/assets/products/men/roadster.jpg'
      },
      {
        id: 7,
        name: 'Superdy',
        color: 'green',
        imageUrl: '~/assets/products/men/superdy.jpg'
      },
      {
        id: 8,
        name: 'Tommy Hillfiger',
        color: 'green',
        imageUrl: '~/assets/products/men/tommy-hillfiger.jpg'
      },
      {
        id: 9,
        name: 'Wrogn',
        color: 'blue',
        imageUrl: '~/assets/products/men/wrogn.jpg'
      },
      {
        id: 10,
        name: 'Roadster',
        color: 'gray',
        imageUrl: '~/assets/products/men/roadster-gray.jpg'
      },
      {
        id: 11,
        name: 'Fido Dido',
        color: 'pink',
        imageUrl: '~/assets/products/men/fido-dido.jpg'
      }
    ]);
    this.cdRef.detectChanges();
  }

  getProductName(product) {
    console.log('*** product: ', product);
    return product.name;
  }
}
