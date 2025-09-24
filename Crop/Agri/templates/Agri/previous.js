import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const CropsNavigation = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-4">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>

      {/* Page Content */}
      <h1 className="text-xl font-bold mt-4">Crops Navigation</h1>
      <p>Select a crop category to explore more details.</p>

      {/* Example Agri Links */}
      <div className="mt-4 space-y-2">
        <button 
          onClick={() => navigate('/crops/rice')} 
          className="block bg-green-500 text-white px-4 py-2 rounded"
        >
          Rice
        </button>
        <button 
          onClick={() => navigate('/crops/wheat')} 
          className="block bg-green-500 text-white px-4 py-2 rounded"
        >
          Wheat
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/crops-navigation" element={<CropsNavigation />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
