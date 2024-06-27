import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(public serve:ServicesService){}

  public todoItem =""; public todoDesc="";
  public todoObj:any = {todo_name:"", todo_desc:""}
  public todoArray:any = []
  public index = 0
  
  addTodo(){
    this.todoObj = {todo_name: this.todoItem, todo_desc:this.todoDesc}
    this.todoArray.push(this.todoObj)
    this.todoItem=""; this.index += 1;
    this.serve.addTodo(this.todoObj).subscribe(data=>{console.log(data);
    })
    console.log(this.todoArray);
    
  }
  delete(i:number){
    // alert(i)
    let items = this.todoArray.filter((each:object, index:number)=>index !==i);
    // myWord.splice(indexxx, 1 )
    this.todoArray = items
  }
  edit(i:number){
    alert("Edit iz Working fine")
    // let edit = "edited";
    // let item = this.todoArray.filter((each:object, index:number)=> index == i);
    // console.log(item);
    // item.todo_Item = edit
    
    // this.todoItem = item.todo_Item
    
  }
}
