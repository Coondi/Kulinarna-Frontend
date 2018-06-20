import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RecipeComponent } from 'src/app/recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { ToastrModule } from 'ngx-toastr';
import { RecipeServiceService } from './recipes/shared/recipe-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }