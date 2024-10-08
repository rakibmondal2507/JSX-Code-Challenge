//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import reactDom from "react-dom";

reactDom.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Mango</li>
      <li>Apple</li>
      <li>Grapes</li>
    </ul>
  </div>,
  document.getElementById("root")
);
