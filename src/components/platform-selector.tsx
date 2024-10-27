import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import usePlatform, { Platform } from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (selectedPlatform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data: platforms, error } = usePlatform();
  if (error) return null;
  else
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem
            color={"red"}
            as={Link}
            onClick={() => onSelectPlatform(null)}
          >
            {" "}
            clear{" "}
          </MenuItem>
          {platforms.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
};
