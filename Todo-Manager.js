var promptSync = require('prompt-sync');
var input = promptSync();
var TodoManager = /** @class */ (function () {
    function TodoManager() {
        this.Todos = [];
        this.idCounter = 1;
    }
    TodoManager.prototype.addTodo = function (title) {
        var todo = {
            id: this.idCounter++,
            Title: title, // Removed unnecessary template literal
            isCompleted: false
        };
        this.Todos.push(todo);
        return {
            success: true,
            message: "Todo added in the list",
            data: todo
        };
    };
    TodoManager.prototype.getTodo = function () {
        if (this.Todos.length === 0) {
            return {
                success: false,
                message: "No todo items present",
                data: []
            };
        }
        // Display todos
        console.log("\n📝 Your Todos:");
        for (var _i = 0, _a = this.Todos; _i < _a.length; _i++) {
            var todo = _a[_i];
            var status_1 = todo.isCompleted ? "✅ Completed" : "⏳ Pending";
            console.log("ID: ".concat(todo.id, " | Title: ").concat(todo.Title, " | Status: ").concat(status_1));
        }
        return {
            success: true,
            message: "All items displayed successfully",
            data: this.Todos // Return the actual data
        };
    };
    TodoManager.prototype.completeTodo = function (id) {
        if (this.Todos.length === 0) {
            return {
                success: false,
                message: "No todos available",
                data: null
            };
        }
        var todo = this.Todos.find(function (t) { return t.id === id; });
        if (!todo) {
            return {
                success: false,
                message: "Todo with ID ".concat(id, " not found"),
                data: null
            };
        }
        if (todo.isCompleted) {
            return {
                success: false,
                message: "Todo is already completed",
                data: todo
            };
        }
        todo.isCompleted = true;
        return {
            success: true,
            message: "Task completed successfully!",
            data: todo
        };
    };
    TodoManager.prototype.deleteTodo = function (id) {
        if (this.Todos.length === 0) {
            return {
                success: false,
                message: "No todos available to delete",
                data: null
            };
        }
        var todoIndex = this.Todos.findIndex(function (t) { return t.id === id; });
        if (todoIndex === -1) {
            return {
                success: false,
                message: "Todo with ID ".concat(id, " not found"),
                data: null
            };
        }
        this.Todos.splice(todoIndex, 1);
        return {
            success: true,
            message: "Todo deleted successfully!",
            data: null
        };
    };
    return TodoManager;
}());
function main() {
    var todomanager = new TodoManager();
    while (true) {
        console.log("\n=== Todo Manager ===");
        console.log("1. Add Todo");
        console.log("2. View Todos");
        console.log("3. Complete Todo");
        console.log("4. Delete Todo");
        console.log("5. Exit");
        var choice = input("Enter your choice: ");
        switch (choice) {
            case "1":
                var title = input("Enter todo title: ");
                if (title && title.trim()) { // Check for empty/whitespace input
                    var result = todomanager.addTodo(title.trim());
                    console.log("\u2705 ".concat(result.message));
                }
                else {
                    console.log("❌ Please enter a valid title");
                }
                break;
            case "2":
                var viewResult = todomanager.getTodo();
                if (!viewResult.success) {
                    console.log("\u274C ".concat(viewResult.message));
                }
                break;
            case "3":
                var todoIdStr = input("Enter todo ID to complete: ");
                if (todoIdStr) {
                    var todoId = Number(todoIdStr); // Convert string to number
                    if (isNaN(todoId)) {
                        console.log("❌ Please enter a valid number");
                    }
                    else {
                        var result = todomanager.completeTodo(todoId);
                        if (result.success) {
                            console.log("\u2705 ".concat(result.message));
                        }
                        else {
                            console.log("\u274C ".concat(result.message));
                        }
                    }
                }
                break;
            case "4":
                var deleteIdStr = input("Enter todo ID to delete: ");
                if (deleteIdStr) {
                    var deleteId = Number(deleteIdStr); // Convert string to number
                    if (isNaN(deleteId)) {
                        console.log("❌ Please enter a valid number");
                    }
                    else {
                        var result = todomanager.deleteTodo(deleteId);
                        if (result.success) {
                            console.log("\u2705 ".concat(result.message));
                        }
                        else {
                            console.log("\u274C ".concat(result.message));
                        }
                    }
                }
                break;
            case "5":
                console.log("👋 Goodbye!");
                return; // Exit the function to end the loop
            default:
                console.log("❌ Invalid option! Please choose 1-5");
        }
    }
}
main();
