import { Component } from '@angular/core';
import { UrlService } from '../../url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private _url: UrlService, private _active : ActivatedRoute) { }           //injectservice


  ngOnInit() {
   
  }


  categorid: any
  ubdatecategory(data: any) {
    this.categorid = this._active.snapshot.paramMap.get("id")
    this._url.updateCategory(this.categorid ,data).subscribe(() => {

      alert("Category Updated Successfully")


    }

    )

  }
}
