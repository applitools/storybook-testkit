import React from "react";

export default function Test({ index }) {
  return (
    <React.Fragment>
      <div className="blue">We've met already, I'm blue {index}</div>
      <div className="font-zilla" style={{ fontSize: 36 }}>
        This is Zilla Slab font
      </div>
      <div className="font-shadows" style={{ fontSize: 36 }}>
        This is Shadows Into Light font
      </div>
      <div>just an image:</div>
      <img src="smurfs.jpg" />
      <div>background image from imported css #1:</div>
      <div className="bg-smurfs1" style={{ marginBottom: 10 }}></div>
      <div>background image from imported css #2:</div>
      <div className="bg-smurfs2" style={{ marginBottom: 10 }}></div>
      <div className="region">
        <div style={{ marginBottom: 10 }}>
          <div className="imported2" style={{ marginBottom: 10 }}>
            @import from &lt;style&gt; - background should be{" "}
            <a href="https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/">
              rebeccapurple
            </a>
          </div>
          <div className="imported-nested" style={{ marginBottom: 10 }}>
            @import from css file - background should be teal
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
