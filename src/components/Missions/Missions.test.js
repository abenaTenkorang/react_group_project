import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Missions from "./Missions";
import store from "../../store/store";

const obj = {
  mission_id: "1",
  mission_name: "muskan",
  description: "desc",
  mission: false,
};

test("Demo test", () => {
  expect(1 + 2).toBe(3);
});

test("renders Mission Component", () => {
  const missions = render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  expect(missions).toMatchSnapshot();
});
