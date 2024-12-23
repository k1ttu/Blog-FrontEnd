import { ApiIntegrationService } from './../api-integration.service';
import { Blogpost } from './../blogpost';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeadingComponent } from '../page-heading/page-heading.component';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  imports: [PageHeadingComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  public post!: Blogpost;

  constructor(
    private route: ActivatedRoute,
    private apiData: ApiIntegrationService
  ) {}

  ngOnInit(): void {
    console.log('Initializing BlogComponent...');
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => {
          if (id) {
            return this.apiData.getBlogById(id);
          } else {
            throw new Error('Blog ID is missing from route');
          }
        })
      )
      .subscribe({
        next: (blog: Blogpost) => {
          this.post = blog;
          console.log('Fetched blog:', blog);
        },
        error: (err) => {
          console.error('Error fetching blog:', err);
        },
      });
  }
}
