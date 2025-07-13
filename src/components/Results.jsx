import { Button, Link, Typography, Utility } from '@visa/nova-react';
import { GenericChevronRightTiny } from '@visa/nova-icons-react';
import Quote from './Quote';
import CodeBlock from './CodeBlock';
import ResultsActions from './ResultsActions';
import CopyToClipboard from './CopyToClipboard';

const Results = ({ query = {} }) => {
  const { prompt, components, keywords, code } = query;

  return (
    <Utility
      vPadding={16}
      vFlex
      vFlexCol
      vJustifyContent="between"
      vGap={16}
      className="h-full justify-center md:gap-12 md:p-5 lg:p-6"
    >
      <Utility vFlex vFlexCol vGap={8}>
        <Utility vFlex vFlexCol vGap={8}>
          <Quote variant="left" />
          <Typography variant="headline-2" tag="h1" className="md:text-5xl">
            {prompt}
          </Typography>
          <Quote variant="right" />
        </Utility>

        <Utility vFlex vFlexCol vGap={4}>
          <Typography variant="body-2">Keywords found:</Typography>
          <ul className="inline-flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <li key={index}>
                <Button buttonSize="small" colorScheme="tertiary">
                  #{keyword}
                </Button>
              </li>
            ))}
          </ul>
        </Utility>
      </Utility>

      <Utility vFlex vFlexCol vGap={16} tag="section">
        <Typography variant="headline-4" tag="h2">
          Suggested Components
        </Typography>

        <Utility vFlex vFlexCol vGap={16}>
          {components.map(({ name, description, api }, index) => (
            <Utility
              key={index}
              vFlex
              vFlexCol
              vGap={8}
              vJustifyContent="between"
              className="xs:flex-row rounded-md bg-white p-4 shadow-sm"
            >
              <CopyToClipboard textToCopy={name} hasIcon={false} />
              <Typography className="hidden">{description}</Typography>
              <Link
                href={api}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md p-2 text-sm"
              >
                View docs <GenericChevronRightTiny />
              </Link>
            </Utility>
          ))}
        </Utility>
      </Utility>

      <Utility className="bg-primary h-[1px] w-full" />

      <Utility vFlex vFlexCol vGap={16} tag="section">
        <Typography variant="headline-4" tag="h2">
          Code Snippet
        </Typography>
        <CodeBlock code={code} />
        <ResultsActions />
      </Utility>
    </Utility>
  );
};

export default Results;
