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
  baseURL: string = "http://localhost:62635/api/recipe";



  constructor(private _http : Http) {}

  AddRecipe(recipe : RecipeModel) {
    var body = JSON.stringify(recipe);
    var header = new Headers({'Content-Type':'application/json'});
    var request = new RequestOptions({method: RequestMethod.Post,  headers : header});
    return this._http.post(this.baseURL,body,request).pipe(map(res => res.json())); 
  }

  UpdateRecipe(id , recipe) {
    var body = JSON.stringify(recipe);    
    var header = new Headers({'Content-Type':'application/json'});
    var request = new RequestOptions({method: RequestMethod.Put, headers : header});
    return this._http.put(this.baseURL + '/' + id,body,request).pipe(map(res => res.json())); 
  }

  GetRecipeList() {
    this._http.get(this.baseURL).pipe(map((data : Response) => {
      return data.json() as RecipeModel[];
    })).toPromise().then(x => {
      this.recipeList = x;
    }); 
  }  

  DeleteRecipe(id: number) {
    return this._http.delete(this.baseURL +'/delete/' + id);
  }

  searchName(queryString: string) {
    return this._http.get(this.baseURL + '/searchName/' + queryString);
  }

  searchComponents(queryString: string) {
    return this._http.get(this.baseURL + '/searchComponents/' + queryString);
  }
  searchTime(queryString: string) {
    return this._http.get(this.baseURL + '/searchTime/' + queryString);
  }

}

