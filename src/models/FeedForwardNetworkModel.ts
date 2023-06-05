import { LayerModel } from "./LayerModel";

export class FeedForwardNetworkModel {
    private layers: LayerModel[];

    constructor() {
        this.layers = [];
    }

    public get isEmpty(): boolean {
        return this.layers.length === 0;
    }

    public addLayer(layer: LayerModel): void {
        this.layers.push(layer);
    }

    public getLayers(): LayerModel[] {
        return [...this.layers];
    }
}