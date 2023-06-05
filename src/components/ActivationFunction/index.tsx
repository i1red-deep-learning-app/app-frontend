import React from 'react';
import { ActivationFunctionModel } from '../../models/ActivationFunctionModel';
import { ActivationFunctionType } from '../../models/ActivationFunctionType';

type ActivationProps = {
    activationModel: ActivationFunctionModel
}


const ActivationFunctionDisplayName: { [key in ActivationFunctionType]: string } = {
    [ActivationFunctionType.RELU]: 'ReLU',
    [ActivationFunctionType.LEAKY_RELU]: 'Leaky ReLU'
};


function ActivationFunction({ activationModel }: ActivationProps) {
    return (
        <div>
            <p>{ActivationFunctionDisplayName[activationModel.type]}</p>
        </div>
    );
}

export default ActivationFunction;