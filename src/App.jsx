import PageLayout from "./components/layouts/PageLayout";
import { Routes, Route } from "react-router-dom";
import Vehicle from "./components/routes/vehicle/page";

const App = () => {
  return (
    <main className="dark:bg-primary dark:text-white">
        <PageLayout>
          <Routes>
            <Route path="/" element={<Vehicle />} />
          </Routes>
        </PageLayout>
    </main>
  );
};

export default App;
