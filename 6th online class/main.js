#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: chalk.yellow("What would you like to add in your Todos?"),
            type: "input",
        },
        {
            name: "secondQuestion",
            message: chalk.green("Would you like to add more in your Todos?"),
            type: "confirm",
            default: "true",
        }
    ]);
    todos.push(todosQuestion.firstQuestion);
    console.log(chalk.blue(todos));
    condition = todosQuestion.secondQuestion;
}
