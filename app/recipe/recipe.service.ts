import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Nasi Krawu','The rice of Krawu actually comes from Madura, of course it comes from Bangkalan regency, only in its own place, when it was in the 60s, no one sold. known as KRAWU NATION',
  '../src/app/img/SK.jpg',
  [
    new Ingredient('chicken',1),
    new Ingredient('rice',2),
  ]),
  new Recipe('Pudak','One of the typical snacks in Gresik Regency, East Java, is pawak. Pudak is made from a mixture of rice flour, sugar, and also coconut milk, which is included in the packaging from the areca leaf fronds.','../src/app/img/Pudak.jpeg',
[
  new Ingredient('sugar',1),
  new Ingredient('flour',3),
  new Ingredient('coconut milk',1),
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}