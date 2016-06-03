import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }} <img *ngIf="meal.calories <= 500" src="resources/images/leaf.png" class="leaf"></h3>
  `
})
export class MealComponent {
  public meal: Meal;
}
