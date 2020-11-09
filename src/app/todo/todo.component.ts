import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[
    {
       task:"eat dinner", 
       completed:false,
      },
    { 
      task:"workout", 
      completed:false,
    },
    {
      task: "wake up", 
      completed:true,
    },  
  ];
  constructor() { }

  todoSearchTerm: string="";
  ngOnInit(): void {
  }

  addTask =(form:NgForm):void=>{
    let newTask:Todo={
      task: form.value.newTask,
      completed:false,
    };
    this.todos.push(newTask);
    form.reset();
  }



  removeTask =(index:number):void=>{
    this.todos.splice(index, 1);
  }


  completeTask=(index:number):void=>{
    this.todos[index].completed=true;
  }

  filterTodos = ():Todo[]=>{
    if(!this.todoSearchTerm){
      return this.todos;
    }else{
      return this.todos.filter((todo)=>{
        let currentTodo =todo.task.toLowerCase().trim();
        return currentTodo.includes(this.todoSearchTerm.toLowerCase().trim());
      })
    }
  }

  setTodoSearchTerm=(form: NgForm):void=>{
    this.todoSearchTerm = form.value.searchTerm;
  }
}
