import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { helpCategoryItemsData } from 'src/assets/data';

interface CategoryDetails {
  link: string;
  title: string;
  header: {
    menu: string[];
  };
  content: {
    sections: {
      image: string;
      title: string;
      paragraphs: string[];
    }[];
  };
}

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  helpCategoryData = helpCategoryItemsData;
  link: string | undefined | null;

  renderData: undefined | CategoryDetails;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.link = params['categoryName']; // Assuming 'link' is the name of the route parameter

      if (this.link) {
        this.renderData = this.helpCategoryData.find(
          (item) => item.link === this.link
        );
      }
    });
  }
}
