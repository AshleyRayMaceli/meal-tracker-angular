import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { MealDetailsComponent } from './meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent, MealDetailsComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Ultimate Breakfast", "Scrambled eggs with mushrooms, toast and fruit on the side", 570),
      new Meal("Summer Salad", "Spinach, Strawberries, Avocado, Blueberries, Balsamic", 250),
      new Meal("Gala Apple", "A healthy snack!", 150),
      new Meal("Spicy Ramen", "Miso based broth with noodles, pork and an egg", 620),
      new Meal("Lavendar Ice Cream", "Dessert from Salt n' Straw!", 510)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void  {
    // console.log('parent', clickedMeal);
  }
}
