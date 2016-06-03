import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
  <h3>{{ meal.description }}</h3>
  <h3>{{ meal.calories }} calories</h3>
  `
})
export class MealDetailsComponent {
  public meal: Meal;
}
