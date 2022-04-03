export default (App) => {
  return {
    onmousemove: [
      true, 
      (e) => {
        const cX = e.x;
        const cy = e.y;
        App.setState({
          mouseMove: {
            x: cX,
            y: cy
          }
        })
      }
    ],
    onmousedown: (e) => {
      const pX = e.pageX;
      const pY = e.pageY;
      const count = App.state.mousedown.count + 1;
      App.setState({
        mousedown: {
          count: count,
          last: {x: pX, y: pY}
        }
      })
    }
    
  }
};