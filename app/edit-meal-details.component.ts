import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
    <h2>Edit This Meal:</h2>
    <input [(ngModel)]="meal.name" class="input-lg meal-form"/>
    <input [(ngModel)]="meal.description" class="input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="input-lg meal-form" type="number" min=0/>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
