#!/usr/bin/env node
import inquirer from "inquirer"
import { createMainFolders, createSubfolderFiles } from "../../src/setup.jsup.js";

const __dirname = process.cwd();

const questionsPrompt = [
  {
    type: "input",
    name: "folder",
    message: "Input App Name >>> ",
  },
  {
    type: "list",
    name: "direction",
    message: "Which project structure are you using?",
    choices: ["Forward", "MERN", "VanillaJS", "MEAN"],
  },
];

function main() {
  exitHouse();
}

function exitHouse() {
  inquirer.prompt(questionsPrompt).then((answers) => {
    if (answers.direction === "VanillaJS") {
      createMainFolders(__dirname);
      createSubfolderFiles(__dirname);
    } else {
      console.log("Option not available");
    }

  });
}


main();