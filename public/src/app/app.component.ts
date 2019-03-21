import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  allCakes:any;
  newCake:any = {
    bakername: '',
    imageurl: ''
  };
  editCake:any = {
    content: '',
    rating:''  
  };
  comment:{
    content:string ,
    rating:number
  };
  constructor(private _httpService: HttpService ){ }

  ngOnInit() {
  this._httpService.getAllCakes()
    .subscribe(data =>this.allCakes = data);
    this.comment={content:"",rating:0};

  }


  onSubmit(){
    console.log(this.newCake);
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data =>{
      console.log(data);
      this.newCake = {bakername: "", imageurl:""}
    })

  }
  
  onSubmit2(id:string){
    console.log(id);
    let observable = this._httpService.updateCake(this.editCake, id);
    observable.subscribe(data =>{
      console.log(data);
      this.newCake = {bakername: "", imageurl:"", comments: this.comment}
    })

  }

  createComment(){
    
  }

  viewCake(){

  }

}

