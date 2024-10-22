import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hook/use-Game";
import usePlatform from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (selectedPlatform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({ onSelectPlatform, selectedPlatform}: Props) => {
  const { data:platforms,err } = usePlatform();
 if (err)  return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> 
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
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
