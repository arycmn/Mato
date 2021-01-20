import { Container, Icon, LeftFilter, RightFilter } from "./style";
import { easyToFind, map } from "../../../utils/icons";

const ViewOptions = ({ viewList, setViewList }) => {
  return (
    <Container>
      <LeftFilter onClick={() => setViewList(false)} viewList={viewList}>
        <Icon src={map}></Icon>
      </LeftFilter>
      <RightFilter onClick={() => setViewList(true)} viewList={viewList}>
        <Icon src={easyToFind}></Icon>
      </RightFilter>
    </Container>
  );
};

export default ViewOptions;
