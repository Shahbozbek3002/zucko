import Link from "next/link";
import { List, ListItem } from "./style";
import { NAV_LINKS } from "./constants";

export const Filter = () => {
  return (
    <List>
      {NAV_LINKS.map(({ id, name, link }) => {
        return (
          <ListItem key={id}>
            <Link href={link}>{name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
};
