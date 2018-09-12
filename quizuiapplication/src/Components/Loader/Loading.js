// Component to be rendered when loading data
import React from 'react';
import './Loading.css';
import loading from '../../assets/images/weblist-loader.gif';

export default class Loading extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="loading">
            <img id="loading-image" src={loading} alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }
}