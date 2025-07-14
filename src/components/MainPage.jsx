import { useState } from 'react';
import clsx from 'clsx';
import NewSearch from './NewSearch';
import Results from './Results';
import TextInput from './TextInput';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (prompt) => {
    setQuery(prompt);
    setShowResults(true);
  };

  return (
    <div
      className={clsx(
        'row-start-2 row-end-3 mx-auto flex size-full max-w-3xl min-w-0 flex-col gap-4 p-4 md:p-8',
        !showResults && 'justify-center',
        showResults && 'md:gap-12'
      )}
    >
      {showResults ? (
        <Results query={query} />
      ) : (
        <NewSearch handleSearch={handleSearch} />
      )}

      <TextInput handleSearch={handleSearch} isSearchPage={!showResults} />
    </div>
  );
};

export default MainPage;
