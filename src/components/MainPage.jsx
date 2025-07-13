import { useState } from 'react';
import NewSearch from './NewSearch';
import Results from './Results';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (prompt) => {
    setQuery(prompt);
    setShowResults(true);
  };

  return (
    <div className="row-start-2 row-end-3 h-full">
      {showResults ? (
        <Results query={query} />
      ) : (
        <NewSearch handleSearch={handleSearch} />
      )}
    </div>
  );
};

export default MainPage;
