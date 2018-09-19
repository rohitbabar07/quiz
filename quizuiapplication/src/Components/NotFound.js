// Component to be rendered when given route is not found
import React from 'react';
import LandingScreen from './LandingScreen/LandingScreen';
export default class NotFound extends React.Component {

  render() {
    return (
      <LandingScreen/>
    );
  }
}