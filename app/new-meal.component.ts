import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Add a New Meal!</h3>
      <input placeholder="Meal Name" class="input-lg" #newMealName required>
      <input placeholder="Description" class="input-lg" #newMealDescription required>
      <input placeholder="Calories" class="input-lg" type="number" #newMealCalories required>
      <br>
      <button (click)="addMeal(newMealName, newMealDescription, newMealCalories)" class="btn-info btn-lg add-button">Yum!</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userMealDescription: HTMLInputElement, userMealCalories: HTMLInputElement){

    var newMeal = new Meal(userMealName.value, userMealDescription.value, parseInt(userMealCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    userMealName.value = "";
    userMealDescription.value = "";
    userMealCalories.value = "";
  }
}
