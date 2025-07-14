import { Nav, Utility, Avatar, Button } from '@visa/nova-react';
import { GenericWriteLow, GenericMenuLow } from '@visa/nova-icons-react';

const Header = () => {
  const user = 'Hannah Kim';
  const userInitials = 'HK';

  return (
    <Nav className="row-start-1 row-end-2 flex justify-between">
      <Button colorScheme="tertiary" className="lg:hidden">
        <GenericMenuLow />
      </Button>

      <a href="/" aria-label="Envisa home page" className="text-2xl font-bold">
        Envisa
      </a>

      <Utility vFlex vAlignItems="center" vGap={16}>
        <Button
          colorScheme="tertiary"
          buttonSize="large"
          element={
            <a href="/">
              <GenericWriteLow />
            </a>
          }
          aria-label="Start new search"
          className="hidden px-4 lg:flex"
        />

        <Avatar role="img" aria-label={user} small>
          {userInitials}
        </Avatar>
      </Utility>
    </Nav>
  );
};

export default Header;
