import { useTheme } from '../../../contexts/themeContext';
import { useUser } from '../../../contexts/userContext';
import './counters.css';

export function Counters() {
  const { theme } = useTheme();
  const { repos, followers, following } = useUser();

  return(
    <section className={`counters ${theme}`}>
      <div className="counter-item">
        <span>Repos</span>
        <h2>{ repos ? repos : 0 }</h2>
      </div>

      <div className="counter-item">
        <span>Followers</span>
        <h2>{ followers ? followers : 0 }</h2>
      </div>

      <div className="counter-item">
        <span>Following</span>
        <h2>{ following ? following : 0}</h2>
      </div>
    </section>
  )
}