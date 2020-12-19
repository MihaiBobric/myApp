import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  productsData=[
    {id:1,name:"Mar",description:"Romania"},
    {id:2,name:"Para",description:"Romania"},
    {id:3,name:"Rosie",description:"Israel"},
    {id:4,name:"Cartofi",description:"Bulgaria"}
  ];
}
