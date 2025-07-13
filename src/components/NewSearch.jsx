import { GenericSendLow } from '@visa/nova-icons-react';
import {
  Button,
  Input,
  InputContainer,
  InputMessage,
  Label,
  Typography,
  Utility,
  UtilityFragment,
} from '@visa/nova-react';
import data from '../data/data';
import getRandomIndex from '../utils/getRandomIndex';

const NewSearch = ({ handleSearch = () => {} }) => {
  const id = 'component-keywords';

  const onSubmit = (e) => {
    e.preventDefault();

    // Get a random data set to display in the results UI
    const index = getRandomIndex(data.length);
    const results = data[index];
    handleSearch(results);
  };

  return (
    <Utility
      vPadding={16}
      vFlex
      vFlexCol
      vJustifyContent="between"
      className="h-full justify-center md:gap-12 md:p-5 lg:p-6"
    >
      <Utility
        vFlex
        vFlexGrow
        vFlexCol
        vAlignItems="center"
        vJustifyContent="center"
        vGap={8}
        className="mb-[30vh] text-center md:mb-0 md:grow-0 md:gap-6"
      >
        <Typography variant="headline-1" tag="h1" className="md:text-5xl">
          Hi, Hannah 👋
        </Typography>
        <Typography variant="body-2-bold" className="md:text-xl">
          What are we building today?
        </Typography>
      </Utility>

      <UtilityFragment
        vElevation="xsmall"
        className="mx-auto w-full rounded-2xl md:mb-[30vh] md:max-w-3xl"
      >
        <form onSubmit={onSubmit}>
          <Label htmlFor={id} className="sr-only">
            Component keywords (required)
          </Label>

          <InputContainer className="h-12 rounded-2xl p-4">
            <Input
              id={id}
              name="component-keywords"
              type="text"
              aria-required="true"
              aria-describedby={`${id}-message`}
              placeholder="e.g., navigational footer"
            />
            <Button
              type="submit"
              aria-label="Submit your message"
              iconButton={true}
              buttonSize="small"
              colorScheme="tertiary"
            >
              <GenericSendLow />
            </Button>
          </InputContainer>

          <InputMessage id={`${id}-message`} className="sr-only">
            Describe your component or idea in a few keywords.
          </InputMessage>
        </form>
      </UtilityFragment>
    </Utility>
  );
};

export default NewSearch;
