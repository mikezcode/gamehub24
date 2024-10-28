import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import usePlatform from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (selectedPlatform?: number) => void;
  selectedPlatform?: number ;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data: platforms, error } = usePlatform();

  const selectedPlatformName = platforms.results.find(p=> p.id===selectedPlatform)?.name ?? ""

  if (error) return null;
  else
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatform ? selectedPlatformName : "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem
            color={"red"}
            as={Link}
            onClick={() => onSelectPlatform()}
          >
            {" "}
            clear{" "}
          </MenuItem>
          {platforms.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
};
