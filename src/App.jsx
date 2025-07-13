import MainPage from './components/MainPage';
import Header from './components/Header';

const App = () => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <main>
        <MainPage />
      </main>
    </div>
  );
};

export default App;
