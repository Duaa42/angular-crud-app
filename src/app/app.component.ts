import { Component, Injectable, OnInit, Output,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';
///original code////////
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{ 
  title = 'CRUD Operations';
  users:User[]=[];
  selectedUser:User|undefined;

  constructor(private userService:UserService){
  }
  ngOnInit(){
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users = data;
    })
  }
  addUser(user:User, form:any){
    if(!this.selectedUser){
      this.userService.SaveUser(user).subscribe((data)=>{
        if(data){
          this.getUsers();
          form.resetForm(); 
        }
      });
    }
    else{
      const userData={...user,id:this.selectedUser.id};
      this.userService.UpdateUser(userData).subscribe((data)=>{
        if(data){
          this.getUsers();
          this.selectedUser = undefined;
          form.resetForm(); 
        }
      }
      )
    }  
  }

  deleteUser(id:string){
    console.log(id);
    this.userService.DeleteUser(id).subscribe((data)=>{
      if(data){
        this.getUsers();
      }
    })
  }

  selectUser(id:string){
    this.userService.SelectUser(id).subscribe((data)=>{
      this.selectedUser = data;
    })
  }

}
