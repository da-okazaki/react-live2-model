import React from "react";
import ReactLoading from "react-loading";
import onList from "./on";
import DebugInfo from "./debugInfo";
import Live2d, { toBlob } from "react-live2d-concise";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      blobUrl: null,
      mouseMove: { x: null, y: null },
      mousedown: { count: 0, last: { x: null, y: null } }
    };
  }

  componentDidMount() {
    toBlob("./Hiyori/Hiyori.model3.json").then((blobUrl) => {
      this.setState({
        blobUrl: blobUrl
      });
    });
  }

  render() {
    const on = onList(this);
    const { blobUrl, ...state } = this.state;

    return (
      <div>
        <div>dkdkdkdk</div>
        {blobUrl == null ? (
          <ReactLoading type={"spin"} color="#66ccff" />
        ) : (
          <Live2d model={[blobUrl]} on={on} />
        )}
        <DebugInfo {...state} />
        <div>dkdkdkdk</div>
      </div>
    );
  }
}
