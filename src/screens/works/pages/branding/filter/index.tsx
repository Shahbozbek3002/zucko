import Link from "next/link";
import { Card, FlexContainer, ImageContainer, List, ListItem } from "./style";
import { NAV_LINKS, PRODUCTS } from "./constants";
import { Image, Stack, Text, Title } from "@mantine/core";
import { COLORS } from "@/constants/colors";
import { IconPlus } from "@/assets/icons/plus";
import { useRouter } from "next/router";

export const Filter = () => {
  const router = useRouter();

  return (
    <Stack p={{ base: "60px 20px", lg: "100px 50px" }} bg={COLORS.MAIN_WHITE}>
      <List>
        {NAV_LINKS.map(({ id, name, link }) => {
          return (
            <ListItem key={id}>
              <Link
                href={link}
                className={router.pathname === link ? "active" : ""}
              >
                {name}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <FlexContainer>
        {PRODUCTS.map((product) => {
          return (
            <Card key={product.id} onClick={() => router.push(product.link)}>
              <ImageContainer>
                <Image src={product.image.src} alt={product.name} />
                <IconPlus />
              </ImageContainer>
              <Title>{product.name}</Title>
              <Text>{product.category}</Text>
            </Card>
          );
        })}
      </FlexContainer>
    </Stack>
  );
};
