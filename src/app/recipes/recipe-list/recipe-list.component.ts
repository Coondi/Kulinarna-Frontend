import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

import { RecipeServiceService } from '../shared/recipe-service.service'
import { RecipeModel } from '../shared/recipe-model'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 results: any[] = [];
 queryField: FormControl = new FormControl();
constructor(private recipeService : RecipeServiceService, private toastr : ToastrService) { }

  ngOnInit() {   
    this.recipeService.GetRecipeList();
    this.queryField.valueChanges.subscribe(queryField => this.recipeService.searchName(queryField).subscribe(response => this.results = response.json())); 
    this.queryField.valueChanges.subscribe(queryField => this.recipeService.searchTime(queryField).subscribe(response => this.results = response.json()));        
    this.queryField.valueChanges.subscribe(queryField => this.recipeService.searchComponents(queryField).subscribe(response => this.results = response.json()));  
    if(this.queryField.value == null)
    {
      this.queryField.valueChanges.subscribe(response => this.results = null);
    }
  }

  showForEdit(recipe : RecipeModel){
    this.recipeService.selectedRecipe = Object.assign({}, recipe);
  }

  recipeCard(recipe : RecipeModel){
    this.recipeService.recipeCard = Object.assign({}, recipe);
   // console.log(recipe.id);
   // console.log(this.recipeService.recipeCard);
  }

  DeleteRecipe(id : number) {
    if(confirm("Na pewno usunać przepis?") == true) {
    this.recipeService.DeleteRecipe(id)
      .subscribe(x => {
      this.recipeService.GetRecipeList();
      this.toastr.warning("Usunięto przepis", "")
      })
    }
  }



}
