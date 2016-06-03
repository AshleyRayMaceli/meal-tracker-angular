import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, MealDetailsComponent],
  template: `
    <div class="row">
      <div class="col-xs-6">
        <meal-display *ngFor="#currentMeal of mealList"
          (click)="mealClicked(currentMeal)"
          [class.selected]="currentMeal === selectedMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>

      <div *ngIf="selectedMeal" class="col-xs-6">
        <h3>Meal Details:</h3>
        <meal-details
          [meal]="selectedMeal">
        </meal-details>
      </div>
    </div>
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
