import { Grid } from "@mantine/core";
import { LeftColumn } from "./style";
import { BreadText } from "@/styles/global";
import { ImageHoverPlay } from "@/components/video";
import { BlurInUpCharacter } from "@/components/blur-text";

export const Hero = () => {
  return (
    <Grid gutter="lg" style={{ width: "100%", marginBottom: 100 }}>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <LeftColumn>
          <BreadText>/ About</BreadText>
          <BlurInUpCharacter
            text="We’re a brand and digital studio based in Miami, USA, 
            offering complete solutions from concept to execution, to build, transform
            and leverage your business. We assist and educate our client in making the best use of
            the solutions we build with them."
            delay={0.15}
            duration={3}
            characterClassName="hero-description"
          />
        </LeftColumn>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        {/* <RightColumn> */}
        <ImageHoverPlay />
        {/* </RightColumn> */}
      </Grid.Col>
    </Grid>
  );
};
