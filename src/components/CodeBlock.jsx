import { Highlight, themes } from 'prism-react-renderer';
import CopyToClipboard from './CopyToClipboard';
import clsx from 'clsx';

const CodeBlock = ({ code }) => (
  <div className="bg-code-block-accent relative rounded-md shadow-md">
    <div className="flex justify-end pt-2 pr-4 pb-2 pl-2">
      <CopyToClipboard textToCopy="Copy" hasIcon={true} />
    </div>

    <div className="overflow-hidden rounded-b-md">
      <div className="w-full overflow-x-auto">
        <Highlight code={code.trim()} language="jsx" theme={themes.nightOwl}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={clsx(className, 'min-w-fit p-4 text-sm')}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 pr-4 text-right">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  </div>
);

export default CodeBlock;
