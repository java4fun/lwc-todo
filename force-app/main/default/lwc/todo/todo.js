import { LightningElement, track, wire } from 'lwc';
import getTasks from '@salesforce/apex/ToDoListController.getTasks';
import {refreshApex} from '@salesforce/apex';
import insertTask from '@salesforce/apex/ToDoListController.insertTask';
import deleteTask from '@salesforce/apex/ToDoListController.deleteTask';

export default class Todo extends LightningElement {
    // * array to store all the todo tasks
    @track
    toDoTasks = [];

    newTask = '';

    /*
    * for Apex auto-refresh (when a new task is added to the Org)
    */
    toDoTasksResponse;

    /*
    * spinner
    */
   processing = true;

    updateNewTask(event) {
        this.newTask = event.target.value;
    }

    addTaskToList(event) {
        // only for Non-empty task
        if (this.newTask === '') {
            return;
        }
        // unshift - add to the begin of array
        // push - add to the end of the array

        // this.toDoTasks.push(
        //     {
        //         id: this.toDoTasks.length + 1,
        //         name: this.newTask
        //     }
        // );
        // this.newTask = '';

        this.processing = true;

        insertTask({subject: this.newTask})
        .then(result => {
            //this.processing = false;
            console.log(result);
            this.toDoTasks.push({
                id: this.toDoTasks[this.toDoTasks.length - 1] ? this.toDoTasks[this.toDoTasks.length - 1].id + 1 : 0,
                name: this.newTask,
                recordId: result.Id    // this can be used for Delete
            });
            this.newTask = '';
        })
        .catch(error => {
            console.log(error);
            //this.processing = false;
        }).finally (() => this.processing = false);

        // // Apex wire
        // this.toDoTasks.data.push(
        //     {
        //         Id: this.toDoTasks.data.length + 1,
        //         Subject: this.newTask
        //     }
        // );
        // // this update is not allowed (wire is immutable)
        // this.newTask = '';
    }

    deleteTaskFromList(event) {
        let idToDelete = event.target.name;
        let todoTasks = this.toDoTasks;
        let recordIdToDelete;
        let todoTaskIndex;
        this.processing = true;

        for(let i=0; i<todoTasks.length; i++) {
            if(idToDelete === todoTasks[i].id) {
                todoTaskIndex = i;
            }
        }
        recordIdToDelete = todoTasks[todoTaskIndex].recordId;

        deleteTask(recordIdToDelete)
        .then( result => {
            console.log(result);
            if (result) {
                this.toDoTasks.splice(todoTaskIndex, 1);
            } else {
                console.log("Unable to delete task!")
            }
        }).catch(error => console.log(error))
        .finally(() => this.processing = false);

        // this.toDoTasks.splice(todoTaskIndex, 1);
        // todoTasks.splice(todoTaskIndex, 1);  // works too - reference
    
        // todoTasks.splice(todoTasks.findInex(function(todoTask) {
        //     return todoTask.id === idToDelete;
        // })
        // ,1);

        // Better Method
        // todoTasks.splice(
        //     todoTasks.findIndex(task => task.id === idToDelete)
        //     , 1);
    }

    /*
    * Use Case: view data can use property (immutable)
    */    
    // @wire(getTasks)
    // toDoTasks;
    /*
      toDoTasks = {
        data: [list of tasks],
        error: 'error message'
      };
    */


    /*
    *  wire method to overcome the property immutability issue
    */
    @wire(getTasks)
    getToDoTasks(response) {
        this.toDoTasksResponse = response;  // used for apex refresh
        let data = response.data;
        let error = response.error;

        if (data || error) {
            this.processing = false;
        }

        this.toDoTasks = [];  // clear data
        if (data) {
            data.forEach(task => {
                this.toDoTasks.push(
                    {
                        id: this.toDoTasks.length + 1,
                        name: task.Subject,
                        recordId: task.Id
                    }
                );

            })
        } else if(error) {
            console.log(error);
        }
    }

    refreshToDoList() {
        this.processing = true;
        // refresh data in browser cache only if there is a change on the server side
        // force update this variable, meaning the wire method above has to be invoked
        refreshApex(this.toDoTasksResponse)
        .finally(() => this.processing = false);
    }
}