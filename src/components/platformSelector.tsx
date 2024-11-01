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
import usePlatforms from "../hook/usePlatforms";
import useGameQueryStore from "../store";

export const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();
  const  setPlatformId  = useGameQueryStore(s=>s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  if (error) return null;
  else
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {platformId ? selectedPlatform?.name : "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem color={"red"} as={Link} onClick={() => setPlatformId()}>
            {" "}
            clear{" "}
          </MenuItem>
          {platforms?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => setPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
};
