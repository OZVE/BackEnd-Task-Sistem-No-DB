import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        return this.taskService.createTask(newTask.title, newTask.description)
     
        //return this.taskService.createTask();
    }

    @Delete(':id')
        deleteTask(@Param('id') id: string){
            this.taskService.deleteTask(id)
        }
    
    @Patch(':id')
        updateTask(@Param('id') id: string, @Body() upadatedFields: updateTaskDto){
            return this.taskService.updateTask(id, upadatedFields)
        }
        
}
