const conf = new (require('conf'))();
const chalk = require("chalk");

/*
{
    text : string,
    checked : bool,
    createdDate : Date,
}
*/
function list() {
    const todoList = conf.get('todo-items');
    if (todoList.length > 0 && todoList ) {
        todoList.forEach ( (todo) => {
            const taskDescription = `{$index + 1} : ${todo.text}`
            if (todo.checked) {
                console.log(chalk.green(taskDescription))
            } else {
                console.log(chalk.yellow(taskDescription))
            }   
        });
    } else {
        console.log(chalk.red('TODO olarak hiç bir taskiniz yok.'));
    }
}

module.exports = list;