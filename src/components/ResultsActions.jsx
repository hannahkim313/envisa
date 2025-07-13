import { Button, Utility } from '@visa/nova-react';
import {
  GenericShareLow,
  GenericFavoriteStarOutlineLow,
  GenericAddAltLow,
} from '@visa/nova-icons-react';

const ResultsActions = () => {
  return (
    <Utility className="flex gap-2">
      <Button colorScheme="tertiary">
        <GenericFavoriteStarOutlineLow />
      </Button>
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
