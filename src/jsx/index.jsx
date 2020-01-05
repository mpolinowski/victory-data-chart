import React from 'react'
import ReactDOM from 'react-dom'
import Grid from 'react-css-grid'

import BarChart from './components/barchartDemo.jsx'
import CircularProgress from './components/circularProgressDemo.jsx'
import ZoomChart from './components/zoomChartDemo.jsx'
import CircularTooltip from './components/circularTooltip.jsx'
import MultiDepChart from './components/multipleDependencyChartDemo.jsx'
import MultiTooltipChart from './components/multipointTooltipDemo.jsx'
import ParalellBrushChart from './components/paralellBrushDemo.jsx'
import CentralAxisChart from './components/centralAxisDemo.jsx'
import GroupedTooltipChart from './components/groupedTooltipsDemo.jsx'

class Main extends React.Component {
  render() {
    return (
      <Grid
        width={320}
        gap={24}>
        <BarChart />
        <CircularProgress />
        <ZoomChart />
        <CircularTooltip />
        <MultiDepChart />
        <MultiTooltipChart />
        <ParalellBrushChart />
        <CentralAxisChart />
        <GroupedTooltipChart />
      </Grid>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);