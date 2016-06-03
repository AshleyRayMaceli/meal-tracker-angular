import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">
        {{ meal.name }}
      </h3>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Ultimate Breakfast", "Scrambeled eggs with mushrooms, toast and fruit on the side", 570),
      new Meal("Summer Salad", "Spinach, Strawberries, Avocado, Blueberries, Balsamic", 250),
      new Meal("Spicy Ramen", "Miso based broth with noodles, pork and an egg", 620)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void  {
    console.log(clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public description: string, public calories: number){

  }
}
