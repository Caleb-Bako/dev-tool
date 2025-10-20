import * as fs from "fs/promises";

export async function createMainFolders(dirPath) {
  //creating src folder
  await fs.mkdir(`${dirPath}/src`, { recursive: true });

  //creating files inside src folder
  await fs.mkdir(`${dirPath}/src/controllers`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/models`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/db`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/middlewares`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/routes`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/utils`, { recursive: true });
}

export async function createSubfolderFiles(dirPath) {
  //create server file
  await fs.writeFile(`${dirPath}/index.js`, "server");

  //create other files
  await fs.writeFile(`${dirPath}/app.js`, "app");
  await fs.writeFile(`${dirPath}/.env`, "env");
  await fs.writeFile(`${dirPath}/.gitignore`, "ignore");

  //create subfolders
  await fs.writeFile(`${dirPath}/src/db/index.js`, "database");
  console.log("Done Creating...");
}




