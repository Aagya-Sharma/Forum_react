import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ForumCreation from "./pages/ForumCreation";
import ForumList from "./pages/ForumList";
import ForumDetails from "./pages/ForumDetails";
import ProtectedRoute from "./middleware/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/forum-creation"
          element={
            <ProtectedRoute>
              <ForumCreation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forums"
          element={
            <ProtectedRoute>
              <ForumList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forum/:id"
          element={
            <ProtectedRoute>
              <ForumDetails />
            </ProtectedRoute>
          }
        ></Route>
        {/* Catch-all other route for displaying an error message */}
        <Route path="*" element={<div>Error: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
