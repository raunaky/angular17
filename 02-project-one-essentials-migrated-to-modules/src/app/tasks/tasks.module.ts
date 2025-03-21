import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CardComponent } from "../shared/card/card.component";
import { TasksComponent } from "./tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskDetailsComponent,TaskComponent],
    exports:[TasksComponent],
    imports:[SharedModule,CommonModule, FormsModule]
})
export class TasksModule {

}