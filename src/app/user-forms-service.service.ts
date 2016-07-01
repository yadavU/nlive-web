import { Injectable } from '@angular/core';

@Injectable()
export class UserFormsService {
  userForm : any[] = [];

  constructor() {}

  updateUserInfo(update){
    //this.userForm.pop;
    this.userForm.push(update);//Everytime user updates info clear the array with info and update the new value which will be used to display
  }

  getuserFormInfo(){
    return(this.userForm[0]);
  }
}
