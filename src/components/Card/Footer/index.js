import { FaMapMarkerAlt, FaLink, FaTwitter, FaBuilding } from 'react-icons/fa';
import { Item } from './Item';
import { useUser } from '../../../contexts/userContext';

import './footer.css';

export function Footer() {
  const { company, location, twitter, blog } = useUser();

  return(
    <footer className="card-footer">
      <section>
        <Item title={location}>
          <FaMapMarkerAlt size={20} color="inherit" />
        </Item>

        <Item title={blog} link={blog}>
          <FaLink size={20} color="inherit" />
        </Item>
      </section>
      
      <section>
        <Item title={twitter} link={`https://twitter.com/${twitter}`}>
          <FaTwitter size={20} color="inherit" />
        </Item>

        <Item title={company}>
          <FaBuilding size={20} color="inherit" />
        </Item>
      </section>
    </footer>
  )
}