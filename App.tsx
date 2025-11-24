import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import CourseManager from "./CourseManager";
import Inventory from "./Inventory";
import SupplierManager from "./SupplierManager";
import QuoteBuilder from "./QuoteBuilder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Dashboard />} />

        {/* Otras vistas */}
        <Route path="/courses" element={<CourseManager />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/suppliers" element={<SupplierManager />} />
        <Route path="/quotes" element={<QuoteBuilder />} />

      </Routes>
    </BrowserRouter>
  );
}
