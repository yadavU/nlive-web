import {Injectable} from "@angular/core";

// talks to DB to return the diet-building data - response to search queries,
//initial diet plan based on user-data
declare var Stamplay;

@Injectable()
export class DietService {
  categoryid : string;
  constructor() {}

  getuserDiet(usercategory){
//    Stamplay.Object('usercategories').get({category_name:"obese"}).then((res)=>{
//      this.categoryid=res._id;
//      console.log(this.categoryid);
//    },
//    (err)=>{
//      console.log(err);
//    });
    Stamplay.Object('dietplan').get({_id : "57669bfa17d5a3c615bd1887"}).then((res)=>{
      return res;
    },
    (err)=>{
      console.log(err);
    });
  }
}
