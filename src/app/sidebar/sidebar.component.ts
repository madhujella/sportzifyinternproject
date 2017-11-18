import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: string[] = ["tennis", "badminton", "football", "cycling"];
  rating: number[] = [1, 2, 3, 4];

  constructor(private router: Router) {}

  ngOnInit(){

  }

  toCategory(category){
    this.router.navigate(['filter', category]);
  }
  
  toPrice(type) {
    this.router.navigate(['price', type]);
  }

  toRatings(type) {
    this.router.navigate(['ratings', type]);
  }
}
