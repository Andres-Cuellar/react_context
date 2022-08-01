import Pending from "./Pending";
import Progress from "./Progress";
import Complete from "./Complete";

const List = () => {
  return (
    <div className="row mt-5">
      <Pending />
      <Progress />
      <Complete />
    </div>
  );
};

export default List;
