import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  {path:'' , component:LandingPageComponent},
  {path:'about-page' , component:AboutPageComponent},
  {path:'blogs-page' , component:BlogsPageComponent},
  {path:'blogs-page/:id' , component:BlogComponent}
];
