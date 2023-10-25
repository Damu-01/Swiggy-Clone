import React from "react";
import { Component } from "react";
import { ShimmerSimpleGallery, ShimmerSectionHeader } from "react-shimmer-effects-18";

class Shimmer extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <ShimmerSimpleGallery card imageHeight={300} caption />
      </div>
    );
  }
}

export default Shimmer;

export class ShimmerMenu extends Component {
  render() {
    return (
      <div >
        <ShimmerSectionHeader imageWidth={300} />
        <ShimmerSectionHeader />
        <ShimmerSectionHeader />
        <ShimmerSectionHeader />
      </div>
    );
  }
}