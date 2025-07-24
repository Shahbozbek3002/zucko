import { Grid } from "@mantine/core";
import {
  AwardsSection,
  LeftColumn,
  RightColumn,
  Table,
  TableRow,
  TableCell,
} from "./style";
import { BreadText } from "@/styles/global";
import { BlurInUpCharacter } from "@/components/blur-text";

export const Awards: React.FC = () => {
  const awardsData = [
    { project: "ROBOTECH", award: "Site of the month", source: "AWWWARDS" },
    { project: "WAVE CAR APP", award: "FWA of the day", source: "FWA" },
    { project: "HOMEPLUS", award: "UI, UX, Innovation", source: "CSS DA" },
    {
      project: "PODIUM AW23",
      award: "Honorable mention",
      source: "SITEINSPIRE",
    },
  ];

  return (
    <AwardsSection>
      <BreadText>/ AWARDS</BreadText>
      <Grid gutter="25px" style={{ width: "100%" }}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <LeftColumn>
            <BlurInUpCharacter
              text="We strongly believe that awards enhance the value and recognition"
              delay={0.15}
              duration={3}
              characterClassName="hero-description"
            />
          </LeftColumn>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <RightColumn>
            <Table>
              {awardsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.project}</TableCell>
                  <TableCell>{item.award}</TableCell>
                  <TableCell>{item.source}</TableCell>
                </TableRow>
              ))}
            </Table>
          </RightColumn>
        </Grid.Col>
      </Grid>
    </AwardsSection>
  );
};
