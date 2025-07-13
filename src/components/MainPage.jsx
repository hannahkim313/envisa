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

const MainPage = () => {
  const id = 'component-keywords';

  return (
    <Utility
      vPadding={16}
      vFlex
      vFlexCol
      vJustifyContent="between"
      className="row-start-2 row-end-3 h-full"
    >
      <Utility
        vFlex
        vFlexGrow
        vFlexCol
        vAlignItems="center"
        vJustifyContent="center"
        className="text-center"
      >
        <Typography variant="headline-1" tag="h1">
          Hi, Hannah 👋
        </Typography>
        <Typography variant="body-2-bold">
          What are we building today?
        </Typography>
      </Utility>

      <UtilityFragment vElevation="xsmall" className="rounded-full">
        <form action="">
          <Label htmlFor={id} className="sr-only">
            Component keywords (required)
          </Label>

          <InputContainer className="rounded-full">
            <Input
              id={id}
              name="component-keywords"
              type="text"
              aria-required="true"
              aria-describedby={`${id}-message`}
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

export default MainPage;
