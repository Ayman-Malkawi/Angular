import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {


  constructor(private _ser: ServiceService) { }


  ngOnInit() {

    this.getusers()
}

  users: any;
  getusers() {

    this._ser.getalluser().subscribe((data) => {

      this.users = data


    })
  
  }

}
