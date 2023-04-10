import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Auth } from '../pages/Auth';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Navigate to='/home' replace />} />
        </Route>
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
