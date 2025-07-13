import { Nav, Utility } from '@visa/nova-react';
import { Avatar } from '@visa/nova-react';
import { GenericMenuTiny } from '@visa/nova-icons-react';
import { GenericWriteLow } from '@visa/nova-icons-react';

const Header = () => {
  const user = 'Hannah Kim';
  const userInitials = 'HK';

  return (
    <Nav className="row-start-1 row-end-2 flex justify-between">
      {/* TODO: add sidebar implementation */}
      <GenericMenuTiny className="lg:hidden" />

      <a href="/" aria-label="Envisa home page" className="text-2xl font-bold">
        Envisa
      </a>

      {/* TODO: add dropdown for nav links */}
      <Utility vFlex vAlignItems="center" vGap={16}>
        <a href="/" aria-label="Start new search" className="hidden lg:block">
          <GenericWriteLow />
        </a>

        {/* TODO: turn into clickable avatar with account menu */}
        <Avatar role="img" aria-label={user} small>
          {userInitials}
        </Avatar>
      </Utility>
    </Nav>
  );
};

export default Header;
