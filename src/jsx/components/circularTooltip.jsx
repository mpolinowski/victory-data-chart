import React from 'react'
import { VictoryLabel, VictoryTooltip, VictoryPie } from 'victory'

class CustomLabel extends React.Component {
    render() {
      return (
        <g>
          <VictoryLabel {...this.props}/>
          <VictoryTooltip
            {...this.props}
            x={200} y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            flyoutWidth={100}
            flyoutHeight={100}
            flyoutStyle={{ fill: "black" }}
          />
        </g>
      );
    }
  }
  
  CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
  
  
  class CircularTooltip extends React.Component {
    render() {
      return (
          <VictoryPie
            style={{ labels: { fill: "white" } }}
            innerRadius={100}
            labelRadius={120}
            labels={({ datum }) => `# ${datum.y}`}
            labelComponent={<CustomLabel />}
            data={[
              { x: 1, y: 5 },
              { x: 2, y: 4 },
              { x: 3, y: 2 },
              { x: 4, y: 3 },
              { x: 5, y: 1 }
            ]}
          />
      );
    }
  }

  export default CircularTooltip