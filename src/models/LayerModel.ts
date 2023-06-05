import { ActivationFunctionModel } from "./ActivationFunctionModel";

export class LayerModel {
    public readonly size: number;
    public readonly activation: ActivationFunctionModel;

    constructor(size: number, activation: ActivationFunctionModel) {
        this.size = size;
        this.activation = activation;
    }
}