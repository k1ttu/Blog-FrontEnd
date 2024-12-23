import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  imports: [],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.css'
})
export class PageHeadingComponent {
  @Input() title: string;
  constructor(){
    this.title= "Page Heading";
    console.log("Constructor works")
  };
  ngOnInit(): void {
    console.log(this.title);
  }
}
