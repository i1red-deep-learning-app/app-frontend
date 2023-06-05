import React from 'react';
import './index.css';
import { LayerModel } from '../../models/LayerModel';
import ActivationFunction from '../ActivationFunction';

type LayerProps = {
    layerModel: LayerModel
    width: string
}


function Layer({ layerModel, width }: LayerProps) {
    return (
        <div className='layer' style={{ width: width }}>
            <p>{layerModel.size}</p>
            <ActivationFunction activationModel={layerModel.activation} />
        </div>
    );
}

export default Layer;