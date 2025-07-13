const data = [
  {
    prompt: 'An accordion that displays a single panel',
    keywords: ['accordion', 'panel'],
    components: [
      'Accordion',
      'AccordionHeading',
      'AccordionPanel',
      'AccordionToggleIcon',
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
    components: ['Footer', 'Link'],
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
      'Flag',
      'FlagCloseButton',
      'FlagContent',
      'FlagIcon',
      'ScreenReader',
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
