const data = [
  {
    prompt: 'An accordion with a labeled badge that displays a single panel',
    keywords: ['accordion', 'badge', 'panel'],
    components: [
      {
        name: '<Accordion />',
        description:
          'Sets of vertical headers that reveal or hide subsections of content.',
        api: 'https://design.visa.com/components/accordion/?code_library=react&version=2.5.4#api',
      },
      {
        name: '<Badge />',
        description:
          'Visual indicators that communicate the status of a component.',
        api: 'https://design.visa.com/components/badge/?code_library=react&version=2.5.4#api',
      },
    ],
    code: `
      import { Accordion, AccordionHeading, AccordionPanel, AccordionToggleIcon, Typography } from '@visa/nova-react';

      export const CollapsedAccordion = () => {
        return (
          <Accordion>
            <AccordionHeading buttonSize="large" colorScheme="secondary">
              <AccordionToggleIcon />
              Accordion title
            </AccordionHeading>
            <AccordionPanel>
              <Typography>This is required text that describes the accordion section in more detail.</Typography>
            </AccordionPanel>
          </Accordion>
        );
      };
    `,
  },
  {
    prompt: 'A simple footer with a few important links',
    keywords: ['footer', 'links'],
    components: [
      {
        name: '<Footer />',
        description:
          'Content fixed at the bottom of a page to provide important information or links.',
        api: 'https://design.visa.com/components/footer/?code_library=react&version=2.5.4#api',
      },
      {
        name: '<Link />',
        description:
          'Text-based navigation elements that take users to another destination.',
        api: 'https://design.visa.com/components/link/?code_library=react&version=2.5.4#api',
      },
    ],
    code: `
      import { Footer, Link, Utility, VisaLogo } from '@visa/nova-react';

      export const DefaultFooter = () => {
        return (
          <Footer className="v-gap-15">
            <Utility vFlex vMarginRight={1}>
              <VisaLogo aria-label="Visa" />
            </Utility>
            <Utility vFlex vFlexWrap vFlexGrow vJustifyContent="between" vGap={42}>
              {\`Copyright © \${new Date().getFullYear()} Visa Inc. All Rights Reserved\`}
              <Utility tag="ul" vFlex vFlexWrap vGap={16}>
                <li>
                  <Link href="/footer">Contact us</Link>
                </li>
                <li>
                  <Link href="/footer">Privacy</Link>
                </li>
                <li>
                  <Link href="/footer">Legal/terms and conditions</Link>
                </li>
              </Utility>
            </Utility>
          </Footer>
        );
      };
    `,
  },
  {
    prompt: 'A notification that displays a success message',
    keywords: ['notification', 'success', 'message'],
    components: [
      {
        name: '<Flag />',
        description:
          'Messages that provide low-priority updates about a process or event.',
        api: 'https://design.visa.com/components/flag/?code_library=react&version=2.5.4#api',
      },
    ],
    code: `
      import { Flag, FlagCloseButton, FlagContent, FlagIcon, Typography, ScreenReader } from '@visa/nova-react';

      export const TitleSuccessFlag = () => {
        return (
          <Flag messageType="success">
            <FlagIcon />
            <FlagContent className="v-pl-2 v-pb-2" role="alert" aria-live="polite">
              <ScreenReader>success</ScreenReader>
              <Typography variant="body-2-bold">Success title</Typography>
              <Typography>This is required text that describes the flag in more detail.</Typography>
            </FlagContent>
            <FlagCloseButton />
          </Flag>
        );
      };
    `,
  },
];

export default data;
