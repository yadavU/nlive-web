import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

declare var Stamplay;

@Injectable()
export class LoginAuth implements CanActivate{
  constructor(private router:Router){}
  canActivate(){
    //Stamplay.User.currentUser().then((res)=>{
    //if (res.user.id ! = undefined){
    return true ;
    //}
    //else{
    // return false;
    //}
    //},(err)=>{
    //  return false;
    //});
    this.router.navigate(['/intro']);
    //return false;
  }
}
