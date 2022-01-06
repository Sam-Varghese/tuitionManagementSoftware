import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassNamesService {

  constructor(private httpClient: HttpClient) { }

  // Method to get the names of the class
  getClassNames() {
    
    let url = 'http://localhost:5000/getClassNames';
    let data = this.httpClient.get(url);
    console.log("Got the names of the classes in service. Sending the data to required component");
    return data;
  }

}
