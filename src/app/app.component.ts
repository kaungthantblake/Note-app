import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note_APP';


  onFileChange(event:any){
    const file = event.target.file[0]
    if(file){
      console.log(file);
      
    }

  }
}
