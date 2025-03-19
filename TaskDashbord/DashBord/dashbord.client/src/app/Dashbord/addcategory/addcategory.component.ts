import { Component } from '@angular/core';
import { UrlService } from '../../url.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  constructor(private _url: UrlService) { }


  ngOnInit() { }





  AddCategory(data: any) {

    this._url.addCategory(data).subscribe(() => {

      alert("Category Added Successfully")

    })
  }
}
