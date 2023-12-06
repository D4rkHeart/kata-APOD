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

  loadPrevious() {
    const previousDate = new Date(this.currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    this.currentDate = previousDate;
    this.loadApod(this.formatDate(previousDate));
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
