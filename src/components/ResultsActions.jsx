import { Button, Utility } from '@visa/nova-react';
import { GenericShareLow, GenericAddAltLow } from '@visa/nova-icons-react';
import FavoriteResults from './FavoriteResults';

const ResultsActions = () => {
  return (
    <Utility className="flex gap-2">
      <FavoriteResults />
      <Button colorScheme="tertiary">
        <GenericShareLow />
      </Button>
      <Button colorScheme="tertiary">
        <GenericAddAltLow />
      </Button>
    </Utility>
  );
};

export default ResultsActions;
