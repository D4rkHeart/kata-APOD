import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apod: any;
  currentDate: Date = new Date(); 

  constructor(private apodService: ApodService) {}

  ngOnInit() {
    this.currentDate = new Date();
    this.loadApod(this.formatDate(this.currentDate));
  }

  loadApod(date: string) {
    this.apodService.getApod(date).subscribe(data => {
      this.apod = data;
    });
  }
}
