import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGameQueryStore from "../store";

export const SortSelector = () => {
  const sortList = [
    { name: "", label: "Relevance" },
    { name: "name", label: "Name" },
    { name: "-released", label: "Released Date" },
    { name: "-added", label: "Date Added" },
    { name: "-rating", label: "Rating" },
    { name: "-metacritic", label: "Popularity" },
  ];
 
  const setSortOrder  = useGameQueryStore(s=>s.setSortOrder);
  const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
  const selectedLabel = sortList.find(sort=> sort.name===sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {`order by: ${selectedLabel?.label ?? 'Relevance'} `}
      </MenuButton>
      <MenuList>
        {sortList.map(sort => (
          <MenuItem key={sort.name} onClick={() => setSortOrder(sort.name)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
