import React from 'react'
import ReactDOM from 'react-dom'

import BarChart from './components/barchart'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Google Analytics</h1>
        <BarChart />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);