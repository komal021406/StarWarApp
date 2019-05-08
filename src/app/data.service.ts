import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs';

export interface filmData {
  title: string;
  releaseDate: string;
  
}
const ELEMENT_DATA: filmData[] =[];


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  films=ELEMENT_DATA;
  constructor(private http: HttpClient) { }
  filmSubject = new Subject<filmData[]>();

  getCharacter(){
    return this.http.get("./assets/characters.json");
  }

  getFilms(url){
    return this.http.get(url);
  }

  requestFilms(url){
     this.films=[];
      this.getFilms(url).subscribe((filmsData)=>{
        let films = filmsData['films'];
          
        films.forEach(filmurl => {
          this.getFilms(filmurl).subscribe((individualFilm)=>{
            let tempFilm:filmData = {title:"",releaseDate:""};
            tempFilm.title= individualFilm['title'];
            
            tempFilm.releaseDate = individualFilm['release_date'];
            this.films.push(tempFilm);
          }
            
          );
         
        });
        console.log(this.films);
      },(error)=>{
        alert(JSON.stringify(error));
      })
   setTimeout(() => {
    this.filmSubject.next(this.films);

   }, 1000);
          }
}
