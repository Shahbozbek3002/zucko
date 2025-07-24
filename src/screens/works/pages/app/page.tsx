import { Content } from "@/styles/global";
import { Hero } from "../../components/hero";
import { Filter } from "./filter";

const WorksAppScreen = () => {
  return (
    <>
      <Content>
        <Hero
          title="Applications"
          description="Based in Miami, USA, we function as a branding and digital studio, offering all-inclusive solutions from the start to deployment, fostering the evolution and progression of your business. Our responsibility also involves enlightening our clients on effective usage of the methodologies we collectively develop."
        />
      </Content>
      <Filter />
    </>
  );
};

export default WorksAppScreen;
