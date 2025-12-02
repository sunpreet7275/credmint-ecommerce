// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subCategory: string;
  image: string;
  badge?: 'new' | 'ordered' | 'deal' | 'favorite' | 'sold-out' | 'sale' | 'discount';
  seller: string;
  stock: number;
  sold: number;
  discountPercentage?: number;
  isPromo?: boolean;
  promoEndTime?: string;
  size: 'small' | 'medium';
  aspectRatio: '1:1' | '3:2';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsData: Product[] = [
    {
      "id": 1,
      "name": "Fujiwa alkaline ion drink 1250ml - Barrel of 12 bottles",
      "description": "High-quality alkaline ion drink",
      "price": 32,
      "category": "Food High Grade",
      "subCategory": "Drink",
      "image": "assets/image0.png",
      "badge": "new",
      "seller": "Co., Ltd FUJIWA USA",
      "stock": 100,
      "sold": 25,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 2,
      "name": "Oak Wine",
      "description": "Premium oak-aged wine",
      "price": 517.79,
      "category": "Food High Grade",
      "subCategory": "Drink",
      "image": "assets/image1.png",
      "seller": "Gesan Investment Joint Stock Company",
      "stock": 50,
      "sold": 12,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 3,
      "name": "Pure Kinh Mon Tapioca Flour WATAPY",
      "description": "Pure tapioca flour",
      "price": 58,
      "category": "Food High Grade",
      "subCategory": "Cereals",
      "image": "assets/image2.png",
      "seller": "Gesan Investment Joint Stock Company",
      "stock": 200,
      "sold": 45,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 4,
      "name": "Fujiwa alkaline drinking water in 4 bottles of 5L (with faucet)",
      "description": "Alkaline drinking water with faucet",
      "price": 2300,
      "category": "Food High Grade",
      "subCategory": "Drink",
      "image": "assets/image3.png",
      "badge": "new",
      "seller": "Co., Ltd FUJIWA USA",
      "stock": 30,
      "sold": 8,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 5,
      "name": "Apartment for rent in GELA CENTRAL PARK 1,2,3,4 PN and LAND 72",
      "description": "Luxury apartment for rent",
      "price": 2500,
      "category": "Real Estate",
      "subCategory": "Apartment",
      "image": "assets/image4.png",
      "badge": "new",
      "seller": "Flower Real Estate",
      "stock": 5,
      "sold": 2,
      "size": "medium",
      "aspectRatio": "3:2"
    },
    {
      "id": 6,
      "name": "Apartment for rent in District 10, Ha Do CENTROSA GARDEN",
      "description": "Modern apartment in central location",
      "price": 517.79,
      "category": "Real Estate",
      "subCategory": "Apartment",
      "image": "assets/image5.png",
      "badge": "ordered",
      "seller": "247 REAL ESTATE",
      "stock": 3,
      "sold": 1,
      "size": "medium",
      "aspectRatio": "3:2"
    },
    {
      "id": 7,
      "name": "Apartment for rent in District 1, Saigon Pearl Pearl Plaza",
      "description": "Premium apartment in District 1",
      "price": 4505,
      "category": "Real Estate",
      "subCategory": "Apartment",
      "image": "assets/image6.png",
      "badge": "deal",
      "seller": "Flower Real Estate",
      "stock": 2,
      "sold": 1,
      "size": "medium",
      "aspectRatio": "3:2"
    },
    {
      "id": 8,
      "name": "Land for sale in the central area of Bien Hoa city",
      "description": "Prime land in city center",
      "price": 150000,
      "category": "Real Estate",
      "subCategory": "Land",
      "image": "assets/image7.png",
      "badge": "new",
      "seller": "Vanegroup",
      "stock": 1,
      "sold": 0,
      "size": "medium",
      "aspectRatio": "3:2"
    },
    {
      "id": 9,
      "name": "Angel Whitening Treament Lotion",
      "description": "Skin whitening treatment lotion",
      "price": 132.90,
      "originalPrice": 145.00,
      "category": "Cosmetic",
      "subCategory": "Lotion",
      "image": "assets/image8.png",
      "badge": "favorite",
      "seller": "Co., Ltd Beautyful Face",
      "stock": 150,
      "sold": 42,
      "discountPercentage": 8,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 10,
      "name": "CIC2 Skin Decode Kit",
      "description": "Complete skin care kit",
      "price": 690.38,
      "category": "Cosmetic",
      "subCategory": "Kit",
      "image": "assets/image9.png",
      "badge": "new",
      "seller": "CO., LTD Baby Girl",
      "stock": 75,
      "sold": 18,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 11,
      "name": "Hydro Gel Moisturizing Face Mask",
      "description": "Deep moisturizing face mask",
      "price": 69.04,
      "category": "Cosmetic",
      "subCategory": "Mask",
      "image": "assets/image10.png",
      "badge": "sold-out",
      "seller": "CO., LTD Baby Girl",
      "stock": 0,
      "sold": 120,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 12,
      "name": "Vitamin C Brightening Serum",
      "description": "Brightening serum with Vitamin C",
      "price": 89.99,
      "category": "Cosmetic",
      "subCategory": "Serum",
      "image": "assets/image11.png",
      "seller": "CO., LTD Byware Cosmetic",
      "stock": 200,
      "sold": 65,
      "size": "medium",
      "aspectRatio": "1:1"
    },
    {
      "id": 13,
      "name": "Hand Watch Rossini – 5395T01G",
      "description": "Luxury Rossini watch",
      "price": 183.64,
      "originalPrice": 193.31,
      "category": "Watch",
      "subCategory": "Men",
      "image": "assets/image12.png",
      "badge": "discount",
      "seller": "Co., Ltd Minie Li",
      "stock": 50,
      "sold": 15,
      "discountPercentage": 5,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 14,
      "name": "Hand Watch Swiss Alpine Military – 32931537",
      "description": "Swiss military watch",
      "price": 215.31,
      "category": "Watch",
      "subCategory": "Men",
      "image": "assets/image13.png",
      "seller": "Co., Ltd Smart Marketing",
      "stock": 30,
      "sold": 8,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 15,
      "name": "Hand Watch For Man Larmes – LM TF004 OT 49 G 211.4 NB Optimus Prime",
      "description": "Luxury men's watch",
      "price": 73.01,
      "category": "Watch",
      "subCategory": "Men",
      "image": "assets/image14.png",
      "seller": "Mobile World",
      "stock": 45,
      "sold": 12,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 16,
      "name": "Hand Watch For Man Citizen – BI5000-87L",
      "description": "Citizen men's watch",
      "price": 66.79,
      "category": "Watch",
      "subCategory": "Men",
      "image": "assets/image15.png",
      "seller": "Co., Ltd Minie Li",
      "stock": 60,
      "sold": 20,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 17,
      "name": "Apple Watch Series 5 MWV62VN/A",
      "description": "Latest Apple Watch series",
      "price": 514.51,
      "originalPrice": 539.06,
      "category": "Watch",
      "subCategory": "Smart Watch",
      "image": "assets/image16.png",
      "badge": "discount",
      "seller": "Co., Ltd Minie Li",
      "stock": 300,
      "sold": 700,
      "discountPercentage": 5,
      "isPromo": true,
      "promoEndTime": "2024-12-31T23:59:59",
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 18,
      "name": "Hand Watch Rossini – 1328W01A",
      "description": "Rossini women's watch",
      "price": 146.71,
      "originalPrice": 167.03,
      "category": "Watch",
      "subCategory": "Women",
      "image": "assets/image17.png",
      "badge": "discount",
      "seller": "Co., Ltd Smart Marketing",
      "stock": 40,
      "sold": 10,
      "discountPercentage": 12,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 19,
      "name": "Apple Macbook Pro 2019 MWP42SA/A",
      "description": "Apple Macbook Pro 2019 model",
      "price": 2013.54,
      "category": "Technology",
      "subCategory": "Laptop",
      "image": "assets/image18.png",
      "badge": "new",
      "seller": "Co., Ltd Minie Li",
      "stock": 25,
      "sold": 5,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 20,
      "name": "Apple Watch Series 5 MWV62VN/A",
      "description": "Latest Apple Watch series",
      "price": 514.51,
      "originalPrice": 539.06,
      "category": "Technology",
      "subCategory": "Smart Watch",
      "image": "assets/image16.png",
      "badge": "sale",
      "seller": "Co., Ltd Minie Li",
      "stock": 300,
      "sold": 700,
      "discountPercentage": 5,
      "isPromo": true,
      "promoEndTime": "2024-12-31T23:59:59",
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 21,
      "name": "Apple Macbook Air MWTJ2SA/A Space Grey (2020)",
      "description": "Apple Macbook Air 2020 model",
      "price": 1099,
      "originalPrice": 1193.71,
      "category": "Technology",
      "subCategory": "Laptop",
      "image": "assets/image19.png",
      "badge": "discount",
      "seller": "Kimpine Calculator",
      "stock": 300,
      "sold": 700,
      "discountPercentage": 15,
      "isPromo": true,
      "promoEndTime": "2024-12-31T23:59:59",
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 22,
      "name": "Apple Macbook Pro MWTJ2SA/A Space Grey",
      "description": "Apple Macbook Pro Space Grey",
      "price": 1646.34,
      "category": "Technology",
      "subCategory": "Laptop",
      "image": "assets/image20.png",
      "seller": "Co., Ltd Minie Li",
      "stock": 15,
      "sold": 3,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 23,
      "name": "Apple Macbook Pro 2020 MWP42SA/A (Space Grey)",
      "description": "Apple Macbook Pro 2020 model",
      "price": 2142.98,
      "category": "Technology",
      "subCategory": "Laptop",
      "image": "assets/image21.png",
      "seller": "Co., Ltd Minie Li",
      "stock": 10,
      "sold": 2,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 24,
      "name": "UV Resistant Sunglasses",
      "description": "UV resistant sunglasses",
      "price": 250,
      "category": "Glasses",
      "subCategory": "Sunglasses",
      "image": "assets/image22.png",
      "seller": "Co., Ltd Minie Li",
      "stock": 100,
      "sold": 30,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 25,
      "name": "Designer Eyeglasses Frames",
      "description": "Designer eyeglasses frames",
      "price": 189.99,
      "category": "Glasses",
      "subCategory": "Eyeglasses",
      "image": "assets/image23.png",
      "badge": "new",
      "seller": "M.Y.T Nhà Quang Huy",
      "stock": 75,
      "sold": 18,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 26,
      "name": "Blue Light Blocking Glasses",
      "description": "Blue light blocking computer glasses",
      "price": 39.99,
      "originalPrice": 49.99,
      "category": "Glasses",
      "subCategory": "Computer Glasses",
      "image": "assets/image24.png",
      "badge": "sale",
      "seller": "Co., Ltd Minie Li",
      "stock": 200,
      "sold": 85,
      "discountPercentage": 20,
      "size": "small",
      "aspectRatio": "1:1"
    },
    {
      "id": 27,
      "name": "Polarized Sports Sunglasses",
      "description": "Polarized sports sunglasses",
      "price": 89.99,
      "category": "Glasses",
      "subCategory": "Sports",
      "image": "assets/image25.png",
      "seller": "Co., Ltd Flower In",
      "stock": 60,
      "sold": 22,
      "size": "small",
      "aspectRatio": "1:1"
    }
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.productsData);
  }

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    const filteredProducts = this.productsData.filter(
      product => product.category.toLowerCase() === categoryName.toLowerCase()
    );
    return of(filteredProducts);
  }

  getProductsByCategoryId(categoryId: number, categories: any[]): Observable<Product[]> {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return of([]);
    
    const filteredProducts = this.productsData.filter(
      product => product.category.toLowerCase() === category.name.toLowerCase()
    );
    return of(filteredProducts);
  }
}