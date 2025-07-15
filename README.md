# Envisa

**Envisa** is a prompt-to-component suggestion tool built using the Visa Product Design System (VPDS). The name **Envisa** combines _"envision"_ and _"Visa"_, reflecting the goal of helping developers envision a user interface and bringing it to life using official VPDS components. Users can describe a UI in natural language and receive suggested components, relevant keywords, and a code snippet. This project emphasizes accessibility, responsiveness, and a simple, intuitive UX.

**Live demo**: https://envisa-mdv288xnn-hannahs-projects-a75849cb.vercel.app/

## Approach & Technical Choices

- **Tech stack**: React + Vite for a fast, lightweight development environment.
- **Styling and theming**: Tailwind CSS for responsiveness and Nova Styles' design tokens for custom theme.
- **Design**: All UI was digitally sketched before implementing code to understand app structure and visual design.
- **Suggestion logic**: Uses hardcoded mock data to simulate an AI backend. Each submitted query randomly selects a dataset to demonstrate the UX flow from input to results.
- **Routing**: Conditional rendering and state management to switch between search and results views.
- **Accessibility**:
  - Fully keyboard navigable.
  - `aria-hidden` and `focusable="false"` used on decorative icons.
  - Tooltip is accessible via keyboard focus, and includes a custom logic for touchscreen devices to prevent tooltips from from experiencing buggy behaviors.
  - Forms use VPDS's `<Label />` and `<InputMessage />` for screen reader clarity.

## Assumptions & Shortcuts

- VPDS documentation links are external, assuming this is a standalone tool. If part of a larger dashboard, links would be internal.
- Mapped elements use `index` as React keys for simplicity.
- JSX is the default language for code snippets.

## AI Usage

I used AI tools (like ChatGPT) to research safe copy-to-clipboard behavior, integrate and style code blocks from `prism-react-renderer`, and debug layout and accessibility issues.

All logic and design choices were my own, and AI was used as an assistant to increase productivity.

## Future Implementations

- Multi-language code snippets (JSX, CSS, Flutter, Angular)
- Saved queries library with filtering by keywords or name
- Grouped navigation in desktop header and mobile sidebar
- Live code previews
- Stack or collapse past results on new prompt submission
