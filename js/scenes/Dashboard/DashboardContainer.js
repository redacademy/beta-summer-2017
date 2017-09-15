import React, { Component } from 'react';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {

  static route = {
    navigationBar: {
      title: "My Speaker Dashboard"
    }
  }

  render() {
    return (
      <Dashboard />
    )
  }
}

export default DashboardContainer;
