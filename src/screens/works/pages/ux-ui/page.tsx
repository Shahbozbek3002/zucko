import { Content } from "@/styles/global";
import { Hero } from "../../components/hero";
import { Filter } from "./filter";

const WorksUXUIScreen = () => {
  return (
    <>
      <Content>
        <Hero
          title="UX/UI Design"
          description="We’re a brand and digital studio based in Miami, USA, offering complete solutions from concept to execution, to build, transform and leverage your business. We assist and educate our client in making the best use of the solutions we build with them."
        />
      </Content>
      <Filter />
    </>
  );
};

export default WorksUXUIScreen;
