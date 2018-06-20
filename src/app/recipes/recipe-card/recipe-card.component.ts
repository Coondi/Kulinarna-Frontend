import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { RecipeServiceService } from '../shared/recipe-service.service'
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeModel } from '../shared/recipe-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {


  constructor(private recipeService : RecipeServiceService, private recipeCard : RecipeServiceService) { }

  


  ngOnInit() {
    this.recipeService.recipeCard = {
      id: this.recipeService.selectedRecipe.id,
      Name: this.recipeService.selectedRecipe.Name,
      Components: this.recipeService.selectedRecipe.Components,
      PreparationTime: this.recipeService.selectedRecipe.PreparationTime,
      Description: this.recipeService.selectedRecipe.Description,
    }
  }

}
