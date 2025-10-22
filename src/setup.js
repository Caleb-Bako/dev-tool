import * as fs from "fs/promises";

//Backend creation
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
}

//Frontend creation

//MERN
export async function createFrontendMainFolders(dirPath) {
  //creating src folder
  await fs.mkdir(`${dirPath}/public`, { recursive: true });
  await fs.mkdir(`${dirPath}/src`, { recursive: true });

  //creating files inside src folder
  await fs.mkdir(`${dirPath}/src/components`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/pages`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/assets`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/services`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/context`, { recursive: true });
}

export async function createFrontendfolderFiles(dirPath) {
  await fs.writeFile(`${dirPath}/index.js`, "server");
  await fs.writeFile(`${dirPath}/App.js`, "app");
  await fs.writeFile(`${dirPath}/.gitignore`, "ignore");
}


//VanillaJS
export async function createVanillaFrontendFolders(dirPath) {
  //creating src folder
  await fs.mkdir(`${dirPath}/public`, { recursive: true });
  await fs.mkdir(`${dirPath}/src`, { recursive: true });


  //creating files inside src folder
  await fs.mkdir(`${dirPath}/public/css`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/components`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/modules`, { recursive: true });
  await fs.mkdir(`${dirPath}/src/utils`, { recursive: true });
}

export async function createVanillafolderFiles(dirPath) {
  await fs.writeFile(`${dirPath}/main.js`, "server");
  await fs.writeFile(`${dirPath}/app.js`, "app");
  await fs.writeFile(`${dirPath}/.gitignore`, "ignore");

   await fs.mkdir(`${dirPath}/public/index.html`, { recursive: true });
   await fs.mkdir(`${dirPath}/public/css/style.css`, { recursive: true });
}

//FullStack
export async function createFSFrontendFolders(dirPath) {
  //creating src folder - MERN
  await fs.mkdir(`${dirPath}/frontend`, { recursive: true });

  await fs.mkdir(`${dirPath}/frontend/src`, { recursive: true });
  await fs.mkdir(`${dirPath}/frontend/public`, { recursive: true });

  //creating files inside src folder
 await fs.mkdir(`${dirPath}/frontend/src/components`, { recursive: true });
 await fs.mkdir(`${dirPath}/frontend/src/pages`, { recursive: true });
 await fs.mkdir(`${dirPath}/frontend/src/assets`, { recursive: true });
 await fs.mkdir(`${dirPath}/frontend/src/services`, { recursive: true });
 await fs.mkdir(`${dirPath}/frontend/src/context`, { recursive: true });

}

export async function createFSVFrontendFolders(dirPath) {
  //creating src folder - VanillaJS
  await fs.mkdir(`${dirPath}/client`, { recursive: true });
  await fs.mkdir(`${dirPath}/client/public`, { recursive: true });

  //creating files inside src folder
  await fs.mkdir(`${dirPath}/client/components`, { recursive: true });
  await fs.mkdir(`${dirPath}/client/pages`, { recursive: true });
  await fs.mkdir(`${dirPath}/client/assets`, { recursive: true });
  await fs.mkdir(`${dirPath}/client/services`, { recursive: true });
  await fs.mkdir(`${dirPath}/client/context`, { recursive: true });

   await fs.writeFile(`${dirPath}/client/main.js`, "server");
   await fs.writeFile(`${dirPath}/client/app.js`, "app");
   await fs.writeFile(`${dirPath}/client/.gitignore`, "ignore");

   await fs.mkdir(`${dirPath}/client/public/index.html`, { recursive: true });
   await fs.mkdir(`${dirPath}/client/public/css/style.css`, {
     recursive: true,
   });

}

export async function createFSBackendFolders(dirPath) {
  //creating src folder
  await fs.mkdir(`${dirPath}/backend`, { recursive: true });

  //creating files inside src folder
  await fs.mkdir(`${dirPath}/backend/controllers`, { recursive: true });
  await fs.mkdir(`${dirPath}/backend/models`, { recursive: true });
  await fs.mkdir(`${dirPath}/backend/db`, { recursive: true });
  await fs.mkdir(`${dirPath}/backend/middlewares`, { recursive: true });
  await fs.mkdir(`${dirPath}/backend/routes`, { recursive: true });
  await fs.mkdir(`${dirPath}/backend/utils`, { recursive: true });

  await fs.writeFile(`${dirPath}/backend/server.js`, "server");
  await fs.writeFile(`${dirPath}/backend/.env`, "env");
  await fs.writeFile(`${dirPath}/backend/db/index.js`, "database");

}


export async function createParentFolder(dirPath) {
  try {
    console.log("Creating Folder...");
    await fs.mkdir(dirPath);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log("Folder already exists. Skipping...");
    } else {
      console.error("Error creating folder:", err);
    }
  }
}


