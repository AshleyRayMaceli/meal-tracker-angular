import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
    <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal">
      {{ currentMeal.name }}
    </h3>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
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
      new Meal("Ultimate Breakfast", "Scrambeled eggs with mushrooms, toast and fruit on the side", 570),
      new Meal("Summer Salad", "Spinach, Strawberries, Avocado, Blueberries, Balsamic", 250),
      new Meal("Spicy Ramen", "Miso based broth with noodles, pork and an egg", 620)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void  {
    console.log('parent', clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public description: string, public calories: number){

  }
}
