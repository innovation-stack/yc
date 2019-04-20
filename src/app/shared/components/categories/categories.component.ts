import { Component } from '@angular/core';

@Component({
  selector: 'yc-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  selectedCategory;
  categories = [
    {
      id: 1,
      label: 'Men',
      subCategories: [
        { label: 'Topwear' },
        { label: 'Indian & Festive Wear' },
        { label: 'Plus Size' }
      ],
      showSubCategory: false
    },
    {
      id: 2,
      label: 'Women',
      subCategories: [
        { label: 'Indian & Fusion Wear' },
        { label: 'Western Wear' },
        { label: 'Sports Wear' }
      ],
      showSubCategory: false
    },
    {
      id: 3,
      label: 'Boys Clothing',
      subCategories: [
        { label: 'T-Shirts' },
        { label: 'Shirts' },
        { label: 'Jeans' },
        { label: 'Trousers' }
      ],
      showSubCategory: false
    },
    {
      id: 4,
      label: 'Girls Clothing',
      subCategories: [
        { label: 'Tops' },
        { label: 'T-Shirts'},
        { label: 'Skirts, Shorts & Jumpsuits' },
        { label: 'Jeans' },
        { label: 'Jackets & Coats' }
      ],
      showSubCategory: false
    }
  ];

  private hideAllSubCategoriesExceptOne(selectedCategoryId: number) {
    const totalCategories = this.categories.length;
    let foundIndex;
    for (let index = 0; index < totalCategories; index++) {
      if (this.categories[index].id === selectedCategoryId) {
        foundIndex = index;
      }
      this.categories[index].showSubCategory = false;
    }
    return foundIndex;
  }

  toggleCategory(selectedCategoryId: number) {
    const foundIndex = this.hideAllSubCategoriesExceptOne(selectedCategoryId);
    this.selectedCategory = this.categories[foundIndex];
    if (foundIndex !== undefined && foundIndex >= 0) {
      this.categories[foundIndex].showSubCategory = true;
    }
  }

  goBackToCategories() {
    this.selectedCategory = undefined;
  }
}
