// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesData: Category[] = [
    {
      "id": 1,
      "name": "Real Estate",
      "icon": "real-estate3",
      "count": 45
    },
    {
      "id": 2,
      "name": "Watch",
      "icon": "watch3",
      "count": 128
    },
    {
      "id": 3,
      "name": "Glasses",
      "icon": "glasses2",
      "count": 67
    },
    {
      "id": 4,
      "name": "Cosmetic",
      "icon": "cosmetic3",
      "count": 89
    },
    {
      "id": 5,
      "name": "Food High Grade",
      "icon": "drink",
      "count": 56
    },
    {
      "id": 6,
      "name": "Technology",
      "icon": "technology3",
      "count": 203
    }
  ];

  getCategories(): Observable<Category[]> {
    return of(this.categoriesData);
  }
}