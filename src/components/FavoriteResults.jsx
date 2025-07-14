import {
  Button,
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogHeader,
  Input,
  InputContainer,
  InputMessage,
  Label,
  Typography,
  useFocusTrap,
  Utility,
} from '@visa/nova-react';
import {
  GenericFavoriteStarOutlineLow,
  GenericFavoriteStarFillLow,
} from '@visa/nova-icons-react';
import { useState } from 'react';

const FavoriteResults = () => {
  const { onKeyNavigation, ref } = useFocusTrap();
  const [isSaved, setIsSaved] = useState(false);

  const dialogId = 'dialog-modal';
  const formId = 'dialog-form';

  const handleKeyDown = (e) => {
    onKeyNavigation(e, ref.current?.open);
  };

  const handleOpenDialog = () => {
    ref.current?.showModal();
  };

  const handleCloseDialog = () => {
    ref.current?.close();
  };

  const handleSubmitDialog = (e) => {
    e.preventDefault();

    if (isSaved) {
      setIsSaved(false);
    } else {
      setIsSaved(true);
    }

    handleCloseDialog();
  };

  return (
    <>
      <Button colorScheme="tertiary" onClick={handleOpenDialog}>
        {isSaved ? (
          <GenericFavoriteStarFillLow />
        ) : (
          <GenericFavoriteStarOutlineLow />
        )}
      </Button>

      <Dialog
        id={dialogId}
        ref={ref}
        aria-describedby={`${dialogId}-description`}
        aria-labelledby={`${dialogId}-title`}
        onKeyDown={handleKeyDown}
        className="md:w-sm"
      >
        <DialogContent>
          <DialogHeader id={`${dialogId}-title`}>
            {isSaved ? 'Confirm action' : 'Save search results'}
          </DialogHeader>

          <form onSubmit={handleSubmitDialog} className="flex flex-col gap-4">
            <Label htmlFor={formId}>
              <Typography variant="body-2" className="whitespace-pre-wrap">
                {isSaved
                  ? 'Are you sure you want to remove this saved result from your library? This action cannot be undone.'
                  : 'Name of search results (required)'}
              </Typography>
            </Label>

            {!isSaved && (
              <InputContainer className="h-12 rounded-2xl p-4">
                <Input
                  id={formId}
                  name="saved-results"
                  type="text"
                  aria-required="true"
                  aria-describedby={`${formId}-message`}
                  placeholder="e.g., Default Footer"
                />
              </InputContainer>
            )}

            <Utility
              vFlex
              vFlexCol
              vGap={8}
              className="whitespace-nowrap md:flex-row"
            >
              <Button
                type="submit"
                aria-label={
                  isSaved ? 'Remove from library' : 'Save your results'
                }
              >
                {isSaved ? 'Remove' : 'Save your results'}
              </Button>

              <Button
                type="button"
                colorScheme="secondary"
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
            </Utility>

            {!isSaved && (
              <InputMessage id={`${formId}-message`} className="sr-only">
                Enter a short name for the saved results.
              </InputMessage>
            )}
          </form>
        </DialogContent>
        <DialogCloseButton onClick={handleCloseDialog} />
      </Dialog>
    </>
  );
};

export default FavoriteResults;
