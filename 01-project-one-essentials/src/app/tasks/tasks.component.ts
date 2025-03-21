import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { type NewTask } from './task/task.model';
import { TaskService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,TaskDetailsComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  @Input({required: true}) userId!: string;
  @Input() name?: string;

  
  constructor(private taskService: TaskService) {
  }
  
  isTaskAvailable : Boolean = false;



  get selectedUserTasks() {
   return  this.taskService.getUserTasks(this.userId);
  }

  onTaskComplete(id:string) {
    
  }
  
  onAddTask() {
    this.isTaskAvailable = true;
  }

  onCloseAddTask() {
    this.isTaskAvailable = false;
  }

}
