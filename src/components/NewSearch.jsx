import { Typography, Utility } from '@visa/nova-react';

const NewSearch = () => {
  return (
    <Utility vFlex vFlexCol className="h-full md:h-auto md:gap-12 md:p-8">
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
    </Utility>
  );
};

export default NewSearch;
