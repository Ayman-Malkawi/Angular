import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {


  constructor(private _myser: ServiceService) { }



  ngOnInit() { }



  Add(data:any) {


    this._myser.creatuser(data).subscribe(() =>

      alert("Add Done")

    )
  }
}
