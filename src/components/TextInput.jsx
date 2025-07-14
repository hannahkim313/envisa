import {
  Button,
  Input,
  InputContainer,
  InputMessage,
  Label,
  UtilityFragment,
} from '@visa/nova-react';
import { GenericSendLow } from '@visa/nova-icons-react';
import data from '../data/data';
import getRandomIndex from '../utils/getRandomIndex';
import clsx from 'clsx';

const TextInput = ({ handleSearch = () => {}, isSearchPage = false }) => {
  const id = 'component-keywords';

  const onSubmit = (e) => {
    e.preventDefault();

    // Get a random data set to display in the results UI
    const index = getRandomIndex(data.length);
    const results = data[index];
    handleSearch(results);
  };

  return (
    <UtilityFragment
      vElevation="xsmall"
      className={clsx('w-full rounded-2xl', isSearchPage && 'md:mb-[30vh]')}
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
  );
};

export default TextInput;
