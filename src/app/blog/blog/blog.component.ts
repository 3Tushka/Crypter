import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { blogData } from 'src/assets/data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private router: Router) {}

  blogPosts = blogData;

  navigateToLink(detailsLink: string) {
    console.log(detailsLink);
    if (detailsLink) {
      this.router.navigate([detailsLink]);
    }
  }
}
