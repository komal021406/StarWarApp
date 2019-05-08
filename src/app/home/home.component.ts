import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  displayedColumns: string[] = ['title', 'releaseDate'];
  characters=[];
  films=[];
 
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.dataService.getCharacter().subscribe((data)=>{
       debugger
      this.characters = data['characters'];
      this.dataService.requestFilms(this.characters[0]['url']);
     
      this.dataService.filmSubject.subscribe((data)=>{
        this.films = data;
      })
     } );
  }

  requestFilms(url){

    this.films=[];
    this.dataService.requestFilms(url);
    }

}
