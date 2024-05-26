import React from "react";
import Button from "./Button";

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

const ExpandableText = ({ text, maxLength }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <>
      <div>
        {displayText}
        <Button
          onClick={toggleExpanded}
          text={isExpanded ? "Show less" : "Show more"}
        />
      </div>
    </>
  );
};

export default ExpandableText;
