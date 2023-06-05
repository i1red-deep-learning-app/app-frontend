import { LayerModel } from "../../../models/LayerModel";

const BASE_WIDTH_PERCENTAGE: number = 25;
const MAX_WIDTH_PERCENTAGE: number = 95;


export function calculateLayerWidthPercentages(layerModels: LayerModel[]): string[] {
  if (layerModels.length === 0) {
    return [];
  }

  const maxLayerSize = Math.max(...layerModels.map(layerModel => layerModel.size));

  return layerModels.map(
    layerModel => (
      Math.floor(
        (layerModel.size / maxLayerSize) *
        (MAX_WIDTH_PERCENTAGE - BASE_WIDTH_PERCENTAGE) +
        BASE_WIDTH_PERCENTAGE
      ).toString() + "%"
    )
  );
}
