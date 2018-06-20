import { Component, OnInit } from '@angular/core';

import { RecipeServiceService } from './shared/recipe-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServiceService],
  
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService : RecipeServiceService) { }

  ngOnInit() {
    
  }

}
