import { useRef, useState } from 'react';
import { Button, Tooltip, Utility } from '@visa/nova-react';

const CopyToClipboard = ({ textToCopy = '' }) => {
  const buttonRef = useRef(null);
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipShow = () => setShowTooltip(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTooltipText('Copied!');
    } catch (err) {
      setTooltipText('Failed to copy');
    }
  };

  const handleTooltipReset = () => {
    setShowTooltip(false);
    setTooltipText('Copy to clipboard');
  };

  return (
    <Utility vFlex vJustifyContent="center" className="relative">
      <Button
        buttonSize="small"
        ref={buttonRef}
        onClick={handleCopy}
        onMouseEnter={handleTooltipShow}
        onMouseLeave={handleTooltipReset}
      >
        {textToCopy}
      </Button>

      {showTooltip && (
        <Tooltip
          ref={buttonRef}
          className="absolute bottom-full left-1/2 -translate-x-1/2 transform rounded-sm"
        >
          {tooltipText}
        </Tooltip>
      )}
    </Utility>
  );
};

export default CopyToClipboard;
