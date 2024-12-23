import { Blogpost } from './../blogpost';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-preview',
  imports: [RouterLink],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent {
  @Input() blog !:Blogpost;
}
