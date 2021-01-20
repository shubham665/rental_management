import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  locations;
  branches;
  selectedLocation;
  selectedBranch;

  constructor(public dataService: DataService, private router: Router) { 
    this.locations = this.dataService.data.locations;
  }

  ngOnInit() {

  }

  onLocationChange() {
    this.selectedBranch = '';
    this.branches = this.locations.find((item)=>item.name===this.selectedLocation).branches;
    this.router.navigateByUrl('/');
  }

  onBranchChange() {
    const categories = this.branches.find((item)=>item.name===this.selectedBranch).categories;
    this.dataService.setCategories(categories);
    this.router.navigateByUrl('/catalog');
  }

}
