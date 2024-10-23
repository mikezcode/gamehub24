import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Platform } from "../hook/use-Game";
import usePlatform from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (selectedPlatform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data: platforms, err } = usePlatform();
  if (err) return;
  
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
          {platforms.map((platform) => (
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
