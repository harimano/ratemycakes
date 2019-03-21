import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  // this.getCakes()
  }

  addCake(newCake){
    return this._http.post('/api/cakes',newCake)
  }

  getAllCakes(){
    return this._http.get('/api/cakes');
  }
  updateCake(data: any,id:string){
    console.log("data ======"+id,data)
    return this._http.put('/api/cakes/'+id, data)
  }
}
