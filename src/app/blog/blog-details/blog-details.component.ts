import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { formatForCheckLink } from 'src/app/functions';
import { blogPostDataDetails } from 'src/assets/data';

interface blogPostDataItem {
  headerImage: string;
  header: string;
  content: string[];
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  blogPostDetails = blogPostDataDetails;

  link: string | undefined | null;

  renderData: undefined | blogPostDataItem;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.link = params['blogName']; // Assuming 'link' is the name of the route parameter

      if (this.link) {
        this.renderData = this.blogPostDetails.find(
          (item) => item.checkLink === this.link
        );
      }
    });
  }
}
