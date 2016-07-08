import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

declare var Stamplay;

@Injectable()
export class UserActiveAuth implements CanActivate{
  canActivate(){
    Stamplay.User.currentUser().then((res)=>{
      if (res._id != undefined){
        return false;
      }
      return true;
    },(err)=>{
      return true;
    });
    return true;
  }
}
