import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectedSort: (selectedSort: string) => void;
  selectedSort: string;
}

export const SortSelector = ({ onSelectedSort, selectedSort }: Props) => {
  const sortList = [
    { name: "", label: "Relevance" },
    { name: "name", label: "Name" },
    { name: "-released", label: "Released Date" },
    { name: "-added", label: "Date Added" },
    { name: "-rating", label: "Rating" },
    { name: "-metacritic", label: "Popularity" },
  ];
  const selectedLabel = sortList.find(sort=> sort.name===selectedSort)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {`order by: ${selectedLabel?.label ?? 'Relevance'} `}
      </MenuButton>
      <MenuList>
        {sortList.map(sort => (
          <MenuItem key={sort.name} onClick={() => onSelectedSort(sort.name)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
