import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realease Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedsortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{currentSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedsortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
