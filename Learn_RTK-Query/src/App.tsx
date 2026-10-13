import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;