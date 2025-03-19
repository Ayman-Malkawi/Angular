import { Component } from '@angular/core';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css'
})
export class GetproductComponent {
  constructor(private _http:UrlService) { }                          //inject service

  ngOnInit() {

    this.get();
  }


  dataproduct: any
  //categoryID: any

  get() {


    this._http.getProductbyid().subscribe((data: any) => {

      this.dataproduct = data;



    })


  }
}
