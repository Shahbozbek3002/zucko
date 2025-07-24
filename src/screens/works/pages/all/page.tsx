import { Content } from "@/styles/global";
import { Hero } from "../../components/hero";
import { Filter } from "./filter";

const WorksAllScreen = () => {
  return (
    <>
      <Content>
        <Hero
          title="Latest Projects"
          description={`With our forte in creative direction, photography, film and art direction, your vision becomes an adventure we embark on as Zucko to bring to life. Just like finding the perfect pair of jeans, no creative solution is one-size-fits-all and we’re all ears.`}
        />
      </Content>
      <Filter />
    </>
  );
};

export default WorksAllScreen;
