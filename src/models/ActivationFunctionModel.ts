import { ActivationFunctionType } from "./ActivationFunctionType";

export class ActivationFunctionModel {
    public readonly type: ActivationFunctionType;
    public readonly params: Object;

    constructor(type: ActivationFunctionType, params: Object) {
        this.type = type;
        this.params = params;
    }
}