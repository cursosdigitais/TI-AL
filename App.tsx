import React from 'react';
import SalesPage from './components/SalesPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-text-dark font-opensans">
      <main className="w-full max-w-[960px] mx-auto px-4 py-8 md:py-12">
        <SalesPage />
      </main>
    </div>
  );
};

export default App;