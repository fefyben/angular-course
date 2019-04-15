import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Crock Pot Roast',
      'Place beef roast in crock pot. Mix the dried mixes together in a bowl and sprinkle over the roast. Pour the water around the roast. Cook on low for 7-9 hours.',
      'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
      [
        new Ingredient('beef roast', 2, 'lbs'),
        new Ingredient('brown gravy mix', 1, 'package'),
        new Ingredient('dried Italian salad dressing mix', 1, 'package'),
        new Ingredient('dry ranch dressing mix', 1, 'package'),
        new Ingredient('water', 1/2, 'cup')
      ]
    ),
    new Recipe(
      'Roasted Asparagus',
      'Preheat oven to 425°F. Cut off the woody bottom part of the asparagus spears and discard. With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.If you eat asparagus you know what I mean by that).Place asparagus on foil-lined baking sheet and drizzle with olive oil. Sprinkle with salt. With your hands, roll the asparagus around until they are evenly coated with oil and salt. Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them. They should be tender when pierced with the tip of a knife. The tips of the spears will get very brown but watch them to prevent burning. They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.',
      'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
      [
        new Ingredient('aspargus', 15, 'units'),
        new Ingredient('olive oil', 1, 'tbsp'),
        new Ingredient('kosher salt', 1/2, 'tsp')
      ]
    ),
    new Recipe(
      'Stuffed Acorn Squash',
      'Cut squash in half, remove seeds. Place squash in baking dish, cut-side down. Pour 1/4-inch water into dish. Bake for 30 minutes at 350 degrees F. In large bowl, combine remaining ingredients. Remove squash from oven, fill with mix. Bake for 30-40 more minutes, until squash tender.Enjoy!',
      'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg',
      [
        new Ingredient('acorn squash', 2, 'units'),
        new Ingredient('boiling water', 4, 'cups'),
        new Ingredient('chopped apples', 3, 'units'),
        new Ingredient('dried cranberries', 2, 'packages'),
        new Ingredient('cinnamon', 1, 'tsp'),
        new Ingredient('melted butter', 2, 'tbsp')
      ]
    ),
    new Recipe(
      'Mic\'s Yorkshire Puds',
      'Put the flour and some seasoning into a large bowl. Stir in eggs, one at a time. Whisk in milk until you have a smooth batter. Chill in the fridge for at least 30 minutes. Heat oven to 220C/gas mark 7. Pour the oil into the holes of a 8-hole muffin tin. Heat tin in the oven for 5 minutes. Ladle the batter mix into the tin. Bake for 30 minutes until well browned and risen.',
      'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg',
      [
        new Ingredient('plain flour', 200, 'grams'),
        new Ingredient('eggs', 3, 'units'),
        new Ingredient('milk', 2, 'cups'),
        new Ingredient('vegetable oil', 3, 'tbsp')
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
