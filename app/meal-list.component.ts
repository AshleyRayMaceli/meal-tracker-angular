import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, MealDetailsComponent, NewMealComponent],
  template: `
    <div class="row">

      <div class="col-xs-6">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All Meals</option>
        <option value="healthy">Show Healthy Meals (500 calories or less)</option>
        <option value="unhealthy">Show Meals Over 500 Calories</option>
      </select>
        <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
          (click)="mealClicked(currentMeal)"
          [class.selected]="currentMeal === selectedMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>

      <div *ngIf="selectedMeal" class="col-xs-6 details-column">
        <h3>Meal Details:</h3>
        <meal-details
          [meal]="selectedMeal">
        </meal-details>
      </div>
    </div>

    <div class="row">
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
