import psycopg2
from psycopg2 import sql
import sys
from datetime import datetime

class TodoList:
    def __init__(self):
        self.conn = None
        self.connect_db()
        self.create_table()

    def connect_db(self):
        """Connect to the PostgreSQL database"""
        try:
            self.conn = psycopg2.connect(
                dbname="tododb",
                user="postgres",
                password="Sunderland85*",
                host="localhost",
                port="5432"
            )
        except psycopg2.Error as e:
            print(f"Error connecting to PostgreSQL: {e}")
            sys.exit(1)

    def create_table(self):
        """Create the todos table if it doesn't exist"""
        try:
            with self.conn.cursor() as cur:
                cur.execute("""
                    CREATE TABLE IF NOT EXISTS todos (
                        id SERIAL PRIMARY KEY,
                        task TEXT NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        completed BOOLEAN DEFAULT FALSE,
                        completed_at TIMESTAMP
                    )
                """)
                self.conn.commit()
        except psycopg2.Error as e:
            print(f"Error creating table: {e}")
            self.conn.rollback()

    def add_task(self, task):
        """Add a new task to the database"""
        try:
            with self.conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO todos (task) VALUES (%s) RETURNING id",
                    (task,)
                )
                task_id = cur.fetchone()[0]
                self.conn.commit()
                print(f"Task added with ID: {task_id}")
        except psycopg2.Error as e:
            print(f"Error adding task: {e}")
            self.conn.rollback()

    def list_tasks(self):
        """List all tasks"""
        try:
            with self.conn.cursor() as cur:
                cur.execute("""
                    SELECT id, task, completed, created_at, completed_at 
                    FROM todos 
                    ORDER BY completed, created_at DESC
                """)
                tasks = cur.fetchall()
                
                if not tasks:
                    print("No tasks found!")
                    return
                
                print("\nTodo List:")
                print("-" * 50)
                for task in tasks:
                    id, task_text, completed, created_at, completed_at = task
                    status = "✓" if completed else " "
                    created_str = created_at.strftime("%Y-%m-%d %H:%M")
                    if completed_at:
                        completed_str = completed_at.strftime("%Y-%m-%d %H:%M")
                        print(f"{id}. [{status}] {task_text} (Created: {created_str}, Completed: {completed_str})")
                    else:
                        print(f"{id}. [{status}] {task_text} (Created: {created_str})")
                print("-" * 50)
        except psycopg2.Error as e:
            print(f"Error listing tasks: {e}")

    def complete_task(self, task_id):
        """Mark a task as completed"""
        try:
            with self.conn.cursor() as cur:
                cur.execute("""
                    UPDATE todos 
                    SET completed = TRUE, completed_at = CURRENT_TIMESTAMP 
                    WHERE id = %s AND completed = FALSE
                    RETURNING id
                """, (task_id,))
                
                if cur.rowcount == 0:
                    print(f"No active task found with ID {task_id}")
                else:
                    self.conn.commit()
                    print(f"Task {task_id} marked as completed")
        except psycopg2.Error as e:
            print(f"Error completing task: {e}")
            self.conn.rollback()

    def delete_task(self, task_id):
        """Delete a task"""
        try:
            with self.conn.cursor() as cur:
                cur.execute(
                    "DELETE FROM todos WHERE id = %s RETURNING id",
                    (task_id,)
                )
                
                if cur.rowcount == 0:
                    print(f"No task found with ID {task_id}")
                else:
                    self.conn.commit()
                    print(f"Task {task_id} deleted")
        except psycopg2.Error as e:
            print(f"Error deleting task: {e}")
            self.conn.rollback()

    def clear_completed(self):
        """Delete all completed tasks"""
        try:
            with self.conn.cursor() as cur:
                cur.execute(
                    "DELETE FROM todos WHERE completed = TRUE RETURNING id"
                )
                count = cur.rowcount
                self.conn.commit()
                print(f"Deleted {count} completed tasks")
        except psycopg2.Error as e:
            print(f"Error clearing completed tasks: {e}")
            self.conn.rollback()

    def close(self):
        """Close the database connection"""
        if self.conn:
            self.conn.close()

def display_help():
    """Display help information"""
    print("\nCommands:")
    print("  add <task>    - Add a new task")
    print("  list          - List all tasks")
    print("  complete <id> - Mark a task as completed")
    print("  delete <id>   - Delete a task")
    print("  clear         - Delete all completed tasks")
    print("  help          - Show this help")
    print("  exit          - Exit the program\n")

def main():
    todo = TodoList()
    
    print("\nWelcome to the Terminal Todo List!")
    print("Type 'help' for a list of commands\n")
    
    while True:
        try:
            command = input("> ").strip().lower()
            
            if command.startswith("add "):
                task = command[4:].strip()
                if task:
                    todo.add_task(task)
                else:
                    print("Error: Task description cannot be empty")
            
            elif command == "list":
                todo.list_tasks()
            
            elif command.startswith("complete "):
                try:
                    task_id = int(command[9:].strip())
                    todo.complete_task(task_id)
                except ValueError:
                    print("Error: Task ID must be a number")
            
            elif command.startswith("delete "):
                try:
                    task_id = int(command[7:].strip())
                    todo.delete_task(task_id)
                except ValueError:
                    print("Error: Task ID must be a number")
            
            elif command == "clear":
                todo.clear_completed()
            
            elif command == "help":
                display_help()
            
            elif command in ["exit", "quit"]:
                print("Goodbye!")
                break
            
            else:
                print("Unknown command. Type 'help' for available commands.")
        
        except KeyboardInterrupt:
            print("\nUse 'exit' or 'quit' to exit the program")
        
        except Exception as e:
            print(f"Error: {e}")
    
    todo.close()

if __name__ == "__main__":
    main()