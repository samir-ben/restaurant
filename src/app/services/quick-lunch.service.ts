import { Injectable } from '@angular/core';
import { Food } from '../models/food.interface';

@Injectable({
  providedIn: 'root'
})
export class QuickLunchService {

  constructor() { }

  tacos: Food[] = [
    { id: 1, title: 'Uno', description: '1 viande, tomate, salade iceberg, oigons rouges, sauce maison', price: 5.50 },
    { id: 2, title: 'Dos', description: '2 viandes, cheddar, tomate, salade iceberg, oignons rouges, sauce maison', price: 6.50 },
    { id: 3, title: 'Tres', description: '3 viandes, cheddar, tomate, salade iceberg, oignons rouges, sauce maison', price: 7.50 }
  ];
  chips: Food[] = [
    { id: 1, title: 'Barquette', description: 'Frittes maison', price: 3.50 },
    { id: 2, title: 'Barquette & Frommage', description: 'Frittes maison plus sauche fromagère', price: 4.00 },
    { id: 3, title: 'Chips', description: 'Assiète de chips épicés accompagnée du sauce maison', price: 3.00 },
    { id: 4, title: 'Combo frittes & chips', description: 'Assiète de frittes et de chips épicés fait maison accompagnée du sauce maison',
     price: 5.00 }
  ];
  coffees: Food[] = [
    { id: 1, title: 'Expresso', price: 1.50 },
    { id: 2, title: 'Cappuccino', price: 2.50 },
    { id: 2, title: 'Mocha', price: 2.50 },
    { id: 2, title: 'Café long', price: 1.00 }
  ];
}
