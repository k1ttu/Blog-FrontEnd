import { Blogpost } from './../blogpost';
import { Component } from '@angular/core';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';
import { HttpClient } from '@angular/common/http';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-blogs-page',
  imports: [PageHeadingComponent , BlogPreviewComponent],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent {
  data:any;
    public posts : Blogpost[] = [];
    constructor(private http: HttpClient , private apiData : ApiIntegrationService) {}

    ngOnInit(){
      this.fetchData();
    }
    fetchData():void{
      this.apiData.getBlogs().subscribe({
        next: (response:any ) => {
          this.posts = response.map((blog :Blogpost ) => ({
            _id:blog._id,
            date: new Date(blog.date),
            title: blog.title,
            headings: blog.headings,
            content: blog.content,
            coverPic: blog.coverPic,
            images: blog.images ,
            preview: blog.preview
          }))
        },
        error:(err) => {
          console.log("error fetching data : " + err);
        }
    });

    }
}
