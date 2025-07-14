import { Button, Link, Typography, Utility } from '@visa/nova-react';
import { GenericChevronRightTiny } from '@visa/nova-icons-react';
import Quote from './Quote';
import CodeBlock from './CodeBlock';
import ResultsActions from './ResultsActions';
import CopyToClipboard from './CopyToClipboard';

const Results = ({ query = {} }) => {
  const { prompt, components, keywords, code } = query;

  return (
    <Utility vFlex vFlexCol vGap={16} className="md:gap-12">
      <Utility vFlex vFlexCol vGap={8}>
        <Utility vFlex vFlexCol vGap={8} className="mx-auto max-w-lg">
          <Quote variant="left" />
          <Typography
            variant="headline-2"
            tag="h1"
            className="text-center text-pretty md:text-3xl"
          >
            {prompt}
          </Typography>
          <Quote variant="right" />
        </Utility>

        <Utility vFlex vFlexCol vGap={4}>
          <Typography variant="body-2">Keywords found:</Typography>
          <ul className="inline-flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <li key={index}>
                <Button colorScheme="tertiary">#{keyword}</Button>
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
              vGap={16}
              vJustifyContent="between"
              className="xs:flex-row xs:items-center rounded-md bg-white p-4 shadow-sm"
            >
              <div className="md:flex-1/4">
                <CopyToClipboard textToCopy={name} hasIcon={false} />
              </div>

              <Typography className="hidden max-w-sm md:block md:flex-auto">
                {description}
              </Typography>

              <Link
                href={api}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md p-2 text-sm whitespace-nowrap md:flex-auto md:text-base"
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
