import { Nav } from '@visa/nova-react';
import { GenericMenuTiny } from '@visa/nova-icons-react';
import { Avatar } from '@visa/nova-react';

const Header = () => {
  const user = 'Hannah Kim';
  const userInitials = 'HK';

  return (
    <Nav>
      <GenericMenuTiny />
      <a href="/" aria-label="Envisa home page">
        Envisa
      </a>
      {/* TODO: turn into clickable avatar with account menu */}
      <Avatar role="img" aria-label={user} small>
        {userInitials}
      </Avatar>
    </Nav>
  );
};

export default Header;
