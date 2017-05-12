import { Component } from '@angular/core';

@Component({
    selector: 'culture',
    templateUrl: '../app/components/example/example.component.html',
    providers: [],
    styleUrls: ['./app/components/example/example.component.css']
})
export class ExampleComponent{

  title:string;

  constructor(){
    this.title = "ExampleComponent"
  }

}
