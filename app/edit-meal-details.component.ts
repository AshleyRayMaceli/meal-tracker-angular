import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
    <h3>Edit This Meal:</h3>
      <input [(ngModel)]="meal.name" class="input-lg edit-meal-form"/> <br>
      <input [(ngModel)]="meal.description" class="input-lg edit-meal-form"/> <br>
      <input [(ngModel)]="meal.calories" class="input-lg edit-meal-form" type="number" min=0/> <br>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
