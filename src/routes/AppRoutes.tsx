import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import ComponentsLayout from "../layout/ComponentsLayout";
import ChakraUIFormPage from "../pages/ChakraUIFormPage";
import FabButtonPage from "../pages/FabButtonPage";
import { Home } from "../pages/Home";
import RolesTablePage from "../pages/RolesTablePage";
import TablePage from "../pages/TablePage";
import TransferPage from "../pages/TransferPage";
import { VolumePage } from "../pages/VolumePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<ComponentsLayout />}>
          <Route path="volume" element={<VolumePage />} />
          <Route path="transfer" element={<TransferPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="roles-table" element={<RolesTablePage />} />
          <Route path="fab-button" element={<FabButtonPage />} />
          <Route path="form" element={<ChakraUIFormPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
