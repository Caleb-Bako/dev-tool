# ⚡ scaffold-cli

> A Node.js command-line tool that generates project folder structures instantly — built from scratch, level by level.

---

## 🧠 What Is This?

`scaffold-cli` is a CLI tool I'm building to learn the Node.js ecosystem from the ground up. You run one command and it creates a ready-to-go project folder with files pre-structured for you — like a lightweight version of `create-react-app` or `express-generator`, but **built by me**.

This repo documents the full build journey from a minimal working version to a polished CLI tool.

---

## 🚀 Usage (MVP)

```bash
node index.js my-app
```

Creates the following structure:

```
my-app/
├── src/
│   └── index.js
├── public/
└── README.md
```

---

## 🧩 Build Levels

This project is built incrementally. Each level adds one layer of capability:

| Level | Feature | Tools Used |
|-------|---------|------------|
| ✅ **1** | Create folders & files | `fs`, `path`, `process.argv` |
| 🔲 **2** | Ask user questions interactively | `inquirer` |
| 🔲 **3** | Make it a global CLI command | `npm link`, `commander` |
| 🔲 **4** | Copy pre-made template files | `fs.copyFile`, `fs-extra` |
| 🔲 **5** | Generate `package.json` with project name injected | Template strings + `fs.writeFile` |
| 🔲 **7** | Add options (database, libraries) | CLI arguments & branching |
| 🔲 **8** | Polish — spinners, colors, git init | `chalk`, `ora`, `simple-git` |

---

## 🛠️ Core Concepts (Level 1)

The MVP only needs three Node.js built-ins:

### `process.argv`
Reads what the user typed in the terminal.
```js
const projectName = process.argv[2]; // e.g. "my-app"
```

### `fs` (File System)
Creates folders and writes files.
```js
const fs = require('fs');
fs.mkdirSync(projectName);
fs.writeFileSync(`${projectName}/index.js`, '// entry point');
```

### `path`
Safely joins file paths across operating systems.
```js
const path = require('path');
const filePath = path.join(projectName, 'src', 'index.js');
```

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/Caleb-Bako/scaffold-cli.git
cd scaffold-cli

# No dependencies needed for Level 1 — just run it
node index.js my-project
```

---

## 🔍 Search Terms I Used

- `Node.js fs mkdir example`
- `Node.js fs writeFile example`
- `process.argv Node.js`

---

## 📈 Progress Log

| Date | Level | What I Built |
|------|-------|-------------|
| — | Level 1 | Basic folder + file creation with `fs` and `process.argv` |

---

## 🗺️ Roadmap

- [ ] Level 2 — Interactive prompts with `inquirer`
- [ ] Level 3 — Publish as global CLI via `npm link`
- [ ] Level 4 — Template file copying
- [ ] Level 5 — Dynamic `package.json` generation
- [ ] Level 7 — Database/library options at setup
- [ ] Level 8 — `chalk` colors, `ora` spinners, `simple-git` auto git init

---

## 💡 Why I'm Building This

I want to deeply understand how CLI tools work under the hood — the same tools I use every day like `create-react-app`, `express-generator`, and `vite`. Building from scratch is the best way to learn.

> *"Whatever you do, work at it with all your heart." — Colossians 3:23*

---

## 👤 Author

**Caleb Bako** · Back-End Engineer · Nigeria  
[GitHub](https://github.com/Caleb-Bako) · [LinkedIn](https://linkedin.com/in/caleb-bako)
