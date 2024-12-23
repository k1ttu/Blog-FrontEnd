export interface Blogpost {
  _id:string,
  date: Date,
  title:string,
  headings:string[],
  content:string[],
  coverPic:string,
  images:{index:number , href:string}[];
  preview:string
}
