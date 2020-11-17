import React from "react";

import { storiesOf } from "@storybook/react";
import Test from "./Test";

const COUNT = Number(process.env.STORYBOOK_COUNT) || 1200;

for (let i = 0, ii = COUNT; i < ii; i++) {
  storiesOf("Perf", module).add("Test page " + i, () => <Test index={i} />);
}

storiesOf("Text", module).add(
  "appears after a delay",
  () => (
    <WithScript
      script={() => {
        window.setTimeout(() => {
          document.getElementById("delay").innerText =
            "Now Ready - snapshot me!";
          document.getElementById("delay").className = "ready";
        }, 4000);
      }}
    >
      <div id="delay">Not Ready - do not take snapshot!</div>
    </WithScript>
  ),
  { eyes: { waitBeforeScreenshot: ".ready" } }
);

class WithScript extends React.Component {
  componentDidMount() {
    this.props.script();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
