import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {



  constructor(private _myser: ServiceService , private _active : ActivatedRoute) { }


  ngOnInit() { }



  editoneitem(data: any) {
    let id = this._active .snapshot.paramMap.get("id")
    this._myser.editoneuser(id,data).subscribe(() =>

      alert ("edit completed")


    )
    




  }

}
