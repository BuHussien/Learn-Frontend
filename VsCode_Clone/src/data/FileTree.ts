import type { IFileTree } from "../interfaces";
import { v4 as uuid } from "uuid";
export const fileTree: IFileTree = {
  id: uuid(),
  fileName: "VsCode_Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      fileName: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          fileName: "index.js",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      fileName: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          fileName: "vite.svg",
          isFolder: false,
          content: '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
        },
        {
          id: uuid(),
          fileName: "favicon.ico",
          isFolder: false,
          content: "Favicon binary data",
        },
      ],
    },
    {
      id: uuid(),
      fileName: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          fileName: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              fileName: "Navbar.tsx",
              isFolder: false,
              content: `import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>VS Code Clone</h1>
      <ul>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Help</li>
      </ul>
    </nav>
  );
}`,
            },
            {
              id: uuid(),
              fileName: "Logo.tsx",
              isFolder: false,
              content: `interface LogoProps {
  title?: string;
}

export default function Logo({
  title = "VS Code",
}: LogoProps) {
  return (
    <div className="logo">
      <span>💻</span>
      <strong>{title}</strong>
    </div>
  );
}`,
            },
            {
              id: uuid(),
              fileName: "Footer.jsx",
              isFolder: false,
              content: `export default function Footer() {
  return (
    <footer>
      <p>Built with React and TypeScript</p>
    </footer>
  );
}`,
            },
            {
              id: uuid(),
              fileName: "Sidebar.tsx",
              isFolder: false,
              content: `export default function Sidebar() {
  return (
    <aside>
      <h3>Explorer</h3>
      <p>📁 src</p>
      <p>📄 App.tsx</p>
      <p>📄 main.tsx</p>
    </aside>
  );
}`,
            },
            {
              id: uuid(),
              fileName: "FileExplorer.tsx",
              isFolder: false,
              content: `import type { IFileTree } from "../interfaces";

interface FileExplorerProps {
  tree: IFileTree;
}

export default function FileExplorer({
  tree,
}: FileExplorerProps) {
  return (
    <div>
      <span>
        {tree.isFolder ? "📁" : "📄"} {tree.fileName}
      </span>
    </div>
  );
}`,
            },
          ],
        },
        {
          id: uuid(),
          fileName: "interfaces",
          isFolder: true,
          children: [
            {
              id: uuid(),
              fileName: "index.ts",
              isFolder: false,
              content: `export interface IFileTree {
  fileName: string;
  isFolder: boolean;
  children?: IFileTree[];
  content?: string;
}`,
            },
          ],
        },
        {
          id: uuid(),
          fileName: "App.tsx",
          isFolder: false,
          content: `import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Sidebar />
        <section className="editor">
          <h2>Welcome to VS Code Clone</h2>
          <p>Select a file to start coding.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}`,
        },
        {
          id: uuid(),
          fileName: "main.tsx",
          isFolder: false,
          content: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
        },
        {
          id: uuid(),
          fileName: "index.css",
          isFolder: false,
          content: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #1e1e1e;
  color: #ffffff;
}

.app {
  min-height: 100vh;
}

main {
  display: flex;
  min-height: 80vh;
}

.editor {
  flex: 1;
  padding: 24px;
}`,
        },
      ],
    },
    {
      id: uuid(),
      fileName: ".gitignore",
      isFolder: false,
      content: `node_modules
dist
.env
.DS_Store`,
    },
    {
      id: uuid(),
      fileName: "package.json",
      isFolder: false,
      content: `{
  "name": "vscode-clone",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "typescript": "~5.7.0",
    "vite": "^6.0.0"
  }
}`,
    },
    {
      id: uuid(),
      fileName: "tsconfig.json",
      isFolder: false,
      content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "noEmit": true
  },
  "include": ["src"]
}`,
    },
    {
      id: uuid(),
      fileName: "index.html",
      isFolder: false,
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VS Code Clone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
    },
    {
      id: uuid(),
      fileName: "README.md",
      isFolder: false,
      content: `# VS Code Clone

A simple VS Code-inspired editor built with React and TypeScript.

## Features

- File and folder explorer
- Nested directory structure
- File content preview
- React component architecture

## Getting Starteda

Run npm install, then npm run dev.`,
    },
  ],
};
