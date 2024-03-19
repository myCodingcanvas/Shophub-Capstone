import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="py-3 px-2 w-full">
        <div className="flex flex-col justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
