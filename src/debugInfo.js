import React from'react';

export default class DebugInfo
 extends React.Component {  
  render() {
    const { mouseMove, mousedown } = this.props;
    return (
        <div>
            <p>onMouseMove: {`{ x: ${mouseMove.x} y: ${mouseMove.y}}`}</p>
            <p>onMouseDown: {`count: ${mousedown.count}    last: { x: ${mousedown.last.x} y: ${mousedown.last.y}}`}</p>
        </div>
    );
  }
}