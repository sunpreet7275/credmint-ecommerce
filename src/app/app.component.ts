import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService, Category } from './services/category.service';
import { ProductService, Product } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isDropdownOpen = false;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    });

    // Load all products initially
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data.slice(0, 6); // Show first 6 products initially
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.isDropdownOpen = false;
    this.filterProductsByCategory(category);
  }

  selectCategoryById(categoryId: number) {
    const category = this.categories.find(cat => cat.id === categoryId);
    if (category) {
      this.selectedCategory = category;
      this.filterProductsByCategory(category);
    }
  }

  filterProductsByCategory(category: Category) {
    this.productService.getProductsByCategory(category.name).subscribe({
      next: (data) => {
        this.filteredProducts = data.slice(0, 6); // Show first 6 products of selected category
      },
      error: (error) => {
        console.error('Error filtering products:', error);
      }
    });
  }

  // Reset to show all products
  showAllProducts() {
    this.selectedCategory = null;
    this.filteredProducts = this.products.slice(0, 6);
  }

  getBadgeClass(badge?: string): string {
    if (!badge) return '';
    
    const badgeClasses: { [key: string]: string } = {
      'new': 'badge-product-status-new',
      'ordered': 'badge-product-status-deposited',
      'deal': 'badge-product-status-endow',
      'favorite': 'badge-product-status-favorite',
      'sold-out': 'badge-product-status-sold-out',
      'sale': 'badge-product-status-discount',
      'discount': 'badge-product-status-discount'
    };
    
    return badgeClasses[badge] || '';
  }

  getBadgeText(badge?: string): string {
    if (!badge) return '';
    
    const badgeText: { [key: string]: string } = {
      'new': 'New',
      'ordered': 'Ordered',
      'deal': 'Deal',
      'favorite': 'Favorite',
      'sold-out': 'Sold Out',
      'sale': 'Sale',
      'discount': 'Discount'
    };
    
    return badgeText[badge] || '';
  }

  getDiscountPercentage(originalPrice?: number, price?: number): number {
    if (!originalPrice || !price) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const dropdownElement = event.target as HTMLElement;
    if (!dropdownElement.closest('.dropdown-container-wrapper') && 
        !dropdownElement.closest('.list-category')) {
      this.isDropdownOpen = false;
    }
  }
}