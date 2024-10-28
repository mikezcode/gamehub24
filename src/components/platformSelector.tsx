import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import usePlatforms from "../hook/usePlatforms";
import usePlatform from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (selectedPlatform?: number) => void;
  selectedPlatformId? : number;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  else
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatformId ? selectedPlatform?.name : "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem color={"red"} as={Link} onClick={() => onSelectPlatform()}>
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
