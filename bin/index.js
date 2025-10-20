#!/usr/bin/env node
import inquirer from "inquirer"
import path from "path";
import { createMainFolders, createParentFolder, createSubfolderFiles } from "../src/setup.js";

const __dirname = process.cwd();

const questionsPrompt = [
  {
    type: "input",
    name: "folder",
    message: "Input Folder Name >>> ",
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
    let dirPath = path.join(__dirname, answers.folder);
    createParentFolder(dirPath).then(()=>{
        if (answers.direction === "VanillaJS") {
          createMainFolders(dirPath);
          createSubfolderFiles(dirPath);
        } else {
          console.log("Option not available");
        }
    });

  });
}


main();