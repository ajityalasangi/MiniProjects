const promptSync = require('prompt-sync');
const input = promptSync();

interface Todo {
    id : number,
    Title : string,
    isCompleted : boolean
}

interface ApiResponse <T> {
    success : boolean,
    message : string,
    data ? : T
}

class TodoManager {
    private Todos : Todo[] = [];
    private idCounter : number = 1;

    addTodo(title :string) : ApiResponse<Todo> {
        let todo: Todo = {
            id : this.idCounter++,
            Title : title,  // Removed unnecessary template literal
            isCompleted : false
        }
        this.Todos.push(todo);
        return {
            success : true,
            message : "Todo added in the list",
            data : todo
        };
    }

    getTodo() : ApiResponse<Todo[]> {
        if (this.Todos.length === 0){
            return {
                success : false,
                message : "No todo items present",
                data : []
            };
        }
        
        // Display todos
        console.log("\n📝 Your Todos:");
        for(const todo of this.Todos){
            const status = todo.isCompleted ? "✅ Completed" : "⏳ Pending";
            console.log(`ID: ${todo.id} | Title: ${todo.Title} | Status: ${status}`);
        }
        
        return {
            success : true,
            message : "All items displayed successfully",
            data : this.Todos  // Return the actual data
        };
    }

    completeTodo(id: number) : ApiResponse<Todo | null> {
        if(this.Todos.length === 0){
            return {
                success : false,
                message : "No todos available",
                data : null
            };
        }

        const todo = this.Todos.find(t => t.id === id);
        if(!todo) {
            return {
                success : false,
                message : `Todo with ID ${id} not found`,
                data : null
            };
        }

        if(todo.isCompleted) {
            return {
                success : false,
                message : "Todo is already completed",
                data : todo
            };
        }

        todo.isCompleted = true;
        return {
            success : true,
            message : "Task completed successfully!",
            data : todo
        };
    }

    deleteTodo(id : number) : ApiResponse<null> {
        if(this.Todos.length === 0){
            return {
                success : false,
                message : "No todos available to delete",
                data : null
            };
        }

        const todoIndex = this.Todos.findIndex(t => t.id === id);
        if(todoIndex === -1) {
            return {
                success : false,
                message : `Todo with ID ${id} not found`,
                data : null
            };
        }

        this.Todos.splice(todoIndex, 1);
        return {
            success : true,
            message : "Todo deleted successfully!",
            data : null
        };
    }
}

function main() {
    const todomanager = new TodoManager();

    while(true){
        console.log("\n=== Todo Manager ===");
        console.log("1. Add Todo");
        console.log("2. View Todos");
        console.log("3. Complete Todo");
        console.log("4. Delete Todo");
        console.log("5. Exit");
        
        const choice = input("Enter your choice: ");

        switch(choice ){
            case "1" :
                const title = input("Enter todo title: ");
                if(title && title.trim()){  // Check for empty/whitespace input
                    const result = todomanager.addTodo(title.trim());
                    console.log(`✅ ${result.message}`);
                } else {
                    console.log("❌ Please enter a valid title");
                }
                break;
            
            case "2" : 
                const viewResult = todomanager.getTodo();
                if(!viewResult.success) {
                    console.log(`❌ ${viewResult.message}`);
                }
                break;
            
            case "3" :
                const todoIdStr = input("Enter todo ID to complete: ");
                if(todoIdStr){
                    const todoId = Number(todoIdStr);  // Convert string to number
                    if(isNaN(todoId)) {
                        console.log("❌ Please enter a valid number");
                    } else {
                        const result = todomanager.completeTodo(todoId);
                        if(result.success) {
                            console.log(`✅ ${result.message}`);
                        } else {
                            console.log(`❌ ${result.message}`);
                        }
                    }
                }
                break;
            
            case "4" :
                const deleteIdStr = input("Enter todo ID to delete: ");
                if(deleteIdStr){
                    const deleteId = Number(deleteIdStr);  // Convert string to number
                    if(isNaN(deleteId)) {
                        console.log("❌ Please enter a valid number");
                    } else {
                        const result = todomanager.deleteTodo(deleteId);
                        if(result.success) {
                            console.log(`✅ ${result.message}`);
                        } else {
                            console.log(`❌ ${result.message}`);
                        }
                    }
                }
                break;
            
            case "5" :
                console.log("👋 Goodbye!");
                return;  // Exit the function to end the loop
            
            default : 
                console.log("❌ Invalid option! Please choose 1-5");
        }
    }
}

main();