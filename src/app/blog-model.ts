import {Injectable} from '@angular/core';

@Injectable()
export class BlogPostModel{
  contructor(public text:string, public post_id: string  ){}
}
