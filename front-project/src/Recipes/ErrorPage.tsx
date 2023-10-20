import React, { ReactElement } from "react";

interface Props {}

export default function ErrorPage({}: Props): ReactElement {
  return (
    <div style={{ marginLeft: "40em" }}>
      <h1>Error 404!</h1>
      <p>Seems like api is closed.</p>
    </div>
  );
}
