#!/usr/bin/env node
import inquirer from "inquirer";
import path from "path";
import {
  createFrontendfolderFiles,
  createFrontendMainFolders,
  createFSBackendFolders,
  createFSFrontendFolders,
  createFSVFrontendFolders,
  createMainFolders,
  createParentFolder,
  createSubfolderFiles,
  createVanillafolderFiles,
  createVanillaFrontendFolders,
} from "../src/setup.js";

const __dirname = process.cwd();

const questionsPrompt = [
  {
    type: "input",
    name: "folder",
    message: "Input App Name >>> ",
  },
  {
    type: "list",
    name: "type",
    message: "Project Type",
    choices: ["Frontend", "Backend", "Both"],
  },
  {
    type: "list",
    name: "direction",
    message: "Which tech stack are you using?",
    choices: ["MERN", "VanillaJS"],
  },
];

function main() {
  createFolders();
}

//Add folder structure for vanillajs frontend and fullstack
function createFolders() {
  inquirer.prompt(questionsPrompt).then((answers) => {
    let dirPath = path.join(__dirname, answers.folder);
 
      createParentFolder(dirPath).then(() => {
        if (
          answers.type === "Backend" &&
          (answers.direction === "VanillaJS" ||
            answers.direction === "MERN")
        ) {
          createMainFolders(dirPath);
          createSubfolderFiles(dirPath);
           console.log("Done Creating...");
        } else if (answers.type === "Frontend" && answers.direction === "MERN") {
          createFrontendMainFolders(dirPath);
          createFrontendfolderFiles(dirPath);
           console.log("Done Creating...");
        } else if (answers.type === "Frontend" && answers.direction === "VanillaJS") {
          createVanillaFrontendFolders(dirPath);
          createVanillafolderFiles(dirPath);
           console.log("Done Creating...");
        } else if (answers.type === "Both" && answers.direction === "MERN") {
          createFSFrontendFolders(dirPath);
          createFSBackendFolders(dirPath);
           console.log("Done Creating...");
        }else{
          createFSVFrontendFolders(dirPath);
          createFSBackendFolders(dirPath);
           console.log("Done Creating...");
        }
      }); 
  });
}


// function encounter2b() {
//   inquirer
//     .prompt({
//       type: "list",
//       name: "weapon",
//       message: "Which project structure are you using?",
//       choices: ["MERN", "VanillaJS", "MEAN"],
//     })
//     .then(() => {
//       console.log("The wolf mauls you. You die. The end.");
//     });
// }

main();
