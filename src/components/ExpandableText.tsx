import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expandable, setExpandable] = useState(false);
  const limit = 300;
  if (children.length < limit) return <Text>{children}</Text>;
  if (!children) return null;
  const summary = expandable ? children : children.substring(0, 300) + "...";

  return (
    <Text>
      {summary}
      <Button
        bg={"gold"}
        color={"black"}
        onClick={() => setExpandable(!expandable)}
        ml={2}
        size={"xs"}
        fontWeight={"bold"}
      >
        {expandable ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
