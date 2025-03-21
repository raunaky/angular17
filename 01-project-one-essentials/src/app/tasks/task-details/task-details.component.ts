import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent {
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();
 
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //another way to do dependency injection
  private tasksService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  handleExit() {
    this.onCancel();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
