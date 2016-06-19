import { Injectable } from '@angular/core';
declare var Stamplay;
@Injectable()
export class BlogpostsService {
  user:any;
  constructor() {}

  getposts(current_user,page, per_page){
    this.user = current_user;
//    Stamplay.Object("tags").get(this.user.preferences
    Stamplay.Object("blogposts").get({}).then((res)=>{

    })
  }
}
