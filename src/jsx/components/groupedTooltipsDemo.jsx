import React from 'react'
import { VictoryChart, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryLine, VictoryScatter,  } from 'victory'

class GroupedTooltipChart extends React.Component {
    render() {
      return (
        <VictoryChart height={400} width={400}
          containerComponent={<VictoryVoronoiContainer/>}
        >
            <VictoryGroup
              color="#c43a31"
              labels={({ datum }) => `y: ${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  style={{ fontSize: 10 }}
                />
              }
              data={[
                { x: 1, y: -3 },
                { x: 2, y: 5 },
                { x: 3, y: 3 },
                { x: 4, y: 0 },
                { x: 5, y: -2 },
                { x: 6, y: -2 },
                { x: 7, y: 5 }
              ]}
            >
              <VictoryLine/>
              <VictoryScatter
                size={({ active }) => active ? 8 : 3}
              />
            </VictoryGroup>
            <VictoryGroup
              labels={({ datum }) => `y: ${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  style={{ fontSize: 10 }}
                />
              }
              data={[
                { x: 1, y: 3 },
                { x: 2, y: 1 },
                { x: 3, y: 2 },
                { x: 4, y: -2 },
                { x: 5, y: -1 },
                { x: 6, y: 2 },
                { x: 7, y: 3 }
              ]}
            >
              <VictoryLine/>
              <VictoryScatter
                size={({ active }) => active ? 8 : 3}
              />
            </VictoryGroup>
         </VictoryChart>
      );
    }
  }


export default GroupedTooltipChart