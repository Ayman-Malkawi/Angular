import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private _url: HttpClient) { }


  getCategory() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories")
  }


  getProductbyid() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")


  }

  addCategory(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data)


  }

  updateCategory(id: any, data: any) {
    return this._url.put<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`,data)

  }
}
