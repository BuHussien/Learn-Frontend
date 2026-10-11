import FileComponent from "./components/FileComponent";
import FilesBar from "./components/FilesBar";
import FileContent from "./components/FileContent";
import { fileTree } from "./data/FileTree";
import { Group, Panel } from "react-resizable-panels";

const App = () => {
  return (
    <Group className="flex h-screen">
      <Panel defaultSize={300} minSize={10} maxSize={500} className="w-64 shrink-0 border-r border-gray-300 p-2 overflow-y-auto">
        <FileComponent file={fileTree} />
      </Panel>

      <Panel className="flex flex-1 flex-col min-w-0">
        <FilesBar />
        <FileContent />
      </Panel>
    </Group>
  );
};

export default App;