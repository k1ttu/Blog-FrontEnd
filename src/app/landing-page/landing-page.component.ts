import { Blogpost } from './../blogpost';
import { Component, Injectable } from '@angular/core';
import { PageHeadingComponent } from "../page-heading/page-heading.component";
import { RouterLink } from '@angular/router';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';
import { HttpClient } from '@angular/common/http';
import { ApiIntegrationService } from '../api-integration.service';


@Component({
  selector: 'app-landing-page',
  imports: [PageHeadingComponent  , BlogPreviewComponent ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  private data : any ;
  public posts : Blogpost[] = [] ;
  private index : number =0;

  constructor(private http: HttpClient, private apiData: ApiIntegrationService) {}

  ngOnInit(): void {
    this.fetchData();

  }

  fetchData():void{
    this.apiData.getBlogs().subscribe({
      next: (response:any ) => {
        if( this.index < 4 ){

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
          this.posts.reverse();
          this.index += 1;
        }
      },
      error:(err) => {
        console.log("error fetching data : " + err);
      }
  });
  }
}
