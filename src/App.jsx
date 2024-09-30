import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="h-screen bg-[#F5F5F5]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
