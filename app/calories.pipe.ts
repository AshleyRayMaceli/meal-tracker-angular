import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesThreshold = 500;
    var desiredMealCalories = args[0];
    if (desiredMealCalories === "unhealthy") {
      return input.filter(function(meal) {
        return meal.calories > caloriesThreshold;
      });
    } else if (desiredMealCalories === "healthy") {
      return input.filter(function(meal) {
        return meal.calories <= caloriesThreshold;
      });
    } else {
      return input;
    }
  }
}
