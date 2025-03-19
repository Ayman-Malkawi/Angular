import { Component } from '@angular/core';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-getcategory',
  templateUrl: './getcategory.component.html',
  styleUrl: './getcategory.component.css'
})
export class GetcategoryComponent {
  constructor(private _serv: UrlService) { }           //inject service
  //2
  ngOnInit() {
    this.get();
  }

  //3
  categorycontainer: any
  get() {

    this._serv.getCategory().subscribe((data: any) => {
      this.categorycontainer = data;
    }
    )
   }
}
