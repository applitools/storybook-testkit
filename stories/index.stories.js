import React from "react";

import { storiesOf } from "@storybook/react";
import Test from "./Test";

const COUNT = 3;

for (let i = 0, ii = COUNT; i < ii; i++) {
  storiesOf("Perf", module).add("Test page " + i, () => <Test index={i} />);
}
