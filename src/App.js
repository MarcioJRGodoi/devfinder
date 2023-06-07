import { Card } from './components/Card';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { useTheme } from './contexts/themeContext';
import { useUser } from './contexts/userContext';

import './index.css';

function App() {
  const { theme } = useTheme();
  const { statusMessage } = useUser();

  return (
    <div className={`container ${theme}`}>
      <main className="content">
        <Header />
        <Search />

        {
          statusMessage.length > 0 ? (
            <h2 className="status-message">{statusMessage}</h2>
          ) : (
            <Card />
          )
        }
      </main>
    </div>
  );
}

export default App;