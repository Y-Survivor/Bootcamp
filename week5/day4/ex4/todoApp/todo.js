/**
 * TodoList class for managing tasks
 */
export class TodoList {
    constructor() {
      this.tasks = [];
      this.nextId = 1;
    }
  
    /**
     * Add a new task to the todo list
     * @param {string} title - Title of the task
     * @param {string} description - Description of the task
     * @returns {object} - The newly created task
     */
    addTask(title, description = '') {
      const task = {
        id: this.nextId++,
        title,
        description,
        completed: false,
        createdAt: new Date()
      };
      this.tasks.push(task);
      console.log(`Task added: ${title}`);
      return task;
    }
  
    /**
     * Mark a task as complete by ID
     * @param {number} id - Task ID
     * @returns {boolean} - Success status
     */
    markAsComplete(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        task.completedAt = new Date();
        console.log(`Task #${id} marked as complete: ${task.title}`);
        return true;
      } else {
        console.log(`Task #${id} not found`);
        return false;
      }
    }
  
    /**
     * List all tasks
     * @param {boolean} showOnlyCompleted - If true, show only completed tasks
     * @returns {array} - List of tasks
     */
    listTasks(showOnlyCompleted = false) {
      let taskList = this.tasks;
      
      if (showOnlyCompleted) {
        taskList = taskList.filter(task => task.completed);
      }
      
      console.log('\n===== TODO LIST =====');
      if (taskList.length === 0) {
        console.log('No tasks to display');
      } else {
        taskList.forEach(task => {
          console.log(`[${task.id}] ${task.completed ? '✓' : '□'} ${task.title}`);
          if (task.description) {
            console.log(`   Description: ${task.description}`);
          }
          console.log(`   Status: ${task.completed ? 'Completed' : 'Pending'}`);
          if (task.completed && task.completedAt) {
            console.log(`   Completed on: ${task.completedAt.toLocaleString()}`);
          }
          console.log('---------------------');
        });
      }
      console.log('====================\n');
      
      return taskList;
    }
  
    /**
     * Get task by ID
     * @param {number} id - Task ID
     * @returns {object|null} - Task object or null if not found
     */
    getTask(id) {
      return this.tasks.find(task => task.id === id) || null;
    }
  
    /**
     * Remove a task by ID
     * @param {number} id - Task ID
     * @returns {boolean} - Success status
     */
    removeTask(id) {
      const initialLength = this.tasks.length;
      this.tasks = this.tasks.filter(task => task.id !== id);
      
      if (this.tasks.length < initialLength) {
        console.log(`Task #${id} removed`);
        return true;
      } else {
        console.log(`Task #${id} not found`);
        return false;
      }
    }
  }