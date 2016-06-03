import { Component } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <h3>{{ meal.description }}</h3>
    <h3>{{ meal.calories }} calories</h3>
    <edit-meal-details [meal]="meal"></edit-meal-details>
  `
})
export class MealDetailsComponent {
  public meal: Meal;
}
