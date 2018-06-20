import { Component, OnInit } from '@angular/core';


import { RecipeServiceService } from '../shared/recipe-service.service'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService : RecipeServiceService , private toastr : ToastrService) { }

  ngOnInit() {
    this.clearForm();
    
  }

  clearForm(form? : NgForm) {
    if(form != null)
     form.reset();  
    this.recipeService.selectedRecipe = {
      id: null,
      Name: '',
      Components: '',
      PreparationTime: null,
      Description: '',
    }   
  }
 
  onSubmit(form : NgForm) {
      if(this.recipeService.selectedRecipe.id == null) {
        this.recipeService.AddRecipe(form.value)   
        .subscribe(() => {
            this.clearForm(form);
            this.recipeService.GetRecipeList();
            this.toastr.success("Dodano przepis", "");
          })  
    }
    else
    {     
      this.recipeService.UpdateRecipe(this.recipeService.selectedRecipe.id , form.value)
      .subscribe(() => {     
          this.clearForm(form);
          this.recipeService.GetRecipeList();
          this.toastr.info("Pomyślnie zaktualizowano przepis", "");
        });  
    } 
  }


}
