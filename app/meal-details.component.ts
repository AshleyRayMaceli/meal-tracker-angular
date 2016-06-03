import { Component } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <h2>{{ meal.description }}</h2>
    <h2>{{ meal.calories }} calories</h2>
    <edit-meal-details [meal]="meal"></edit-meal-details>
  `
})
export class MealDetailsComponent {
  public meal: Meal;
}
