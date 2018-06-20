import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { map } from "rxjs/operators";

import { RecipeModel } from './recipe-model';



@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipeCard : RecipeModel;
  selectedRecipe : RecipeModel;
  recipeList : RecipeModel[];



  // --------------W TYM MIEJSCU TRZEBA ZMIENIC NA ADRES LOCALHOST Z BACKENDU------------------------ 
  baseURL: string = "http://localhost:49695";



  constructor(private _http : Http) {}

  AddRecipe(recipe : RecipeModel) {
    var body = JSON.stringify(recipe);
    var header = new Headers({'Content-Type':'application/json'});
    var request = new RequestOptions({method: RequestMethod.Post,  headers : header});
    return this._http.post(this.baseURL + '/api/recipe',body,request).pipe(map(res => res.json())); 
  }

  UpdateRecipe(id , recipe) {
    var body = JSON.stringify(recipe);    
    var header = new Headers({'Content-Type':'application/json'});
    var request = new RequestOptions({method: RequestMethod.Put, headers : header});
    return this._http.put(this.baseURL + '/api/recipe/' + id,body,request).pipe(map(res => res.json())); 
  }

  GetRecipeList() {
    this._http.get(this.baseURL + '/api/recipe').pipe(map((data : Response) => {
      return data.json() as RecipeModel[];
    })).toPromise().then(x => {
      this.recipeList = x;
    }); 
  }  

  DeleteRecipe(id: number) {
    return this._http.delete(this.baseURL +'/api/recipe/delete/' + id);
  }

  searchName(queryString: string) {
    return this._http.get(this.baseURL + '/api/recipe/searchName/' + queryString);
  }

  searchComponents(queryString: string) {
    return this._http.get(this.baseURL + '/api/recipe/searchComponents/' + queryString);
  }
  searchTime(queryString: string) {
    return this._http.get(this.baseURL + '/api/recipe/searchTime/' + queryString);
  }

}

