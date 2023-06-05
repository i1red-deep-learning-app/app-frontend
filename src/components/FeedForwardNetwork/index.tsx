import React, { useState } from 'react';
import './index.css';
import Layer from "../Layer";
import { FeedForwardNetworkModel } from '../../models/FeedForwardNetworkModel';
import { calculateLayerWidthPercentages } from './utility/layer-width-percentages';


type FeedForwardNetworkProps = {
  networkModel: FeedForwardNetworkModel
}


function FeedForwardNetwork({ networkModel: networkModel }: FeedForwardNetworkProps) {
  if (networkModel.isEmpty) {
    return (
      <div className='feed-forward-network'>
        <p>Empty Network</p>
      </div>
    );
  }

  const widthPercentages = calculateLayerWidthPercentages(networkModel.getLayers());

  return (
    <div className='feed-forward-network'>
      {networkModel.getLayers().map((layerModel, i) => <Layer layerModel={layerModel} width={widthPercentages[i]} />)}
    </div>
  );
}

export default FeedForwardNetwork;