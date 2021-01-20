import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  categories = [];
  subcategories = [];
  selectedCategory;

  constructor(public dataService: DataService, private router: Router) { 

  }

  ngOnInit() {
    this.dataService.categoriesChanged.subscribe(value => {
      this.subcategories = [];
      this.categories = this.dataService.categories;
    });
    this.categories = this.dataService.categories;
  }

  onCategoryClick(category) {
    this.selectedCategory = category;
    this.subcategories = this.categories.find((item)=>item.name===category).subcategories;
  }

  goToCategories() {
    this.subcategories = [];
  }

}
