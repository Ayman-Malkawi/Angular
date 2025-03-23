import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }


  getalluser() {

    return this._http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user")


  }


  editoneuser(id:any,data:any) {

    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user/${id}` ,data)


  }


  creatuser(data:any) {

    return this._http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/user" ,data)
  }
}
