import React, { useState } from "react";
import './index.css';
import { LayerModel } from '../../models/LayerModel';
import { ActivationFunctionModel } from '../../models/ActivationFunctionModel';
import { ActivationFunctionType } from '../../models/ActivationFunctionType';
import { FeedForwardNetworkModel } from "../../models/FeedForwardNetworkModel";
import FeedForwardNetwork from "../FeedForwardNetwork";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosInstance } from "../../axios-instance";


function createNetworkModel(): FeedForwardNetworkModel {
  const network = new FeedForwardNetworkModel();
  network.addLayer(new LayerModel(100, new ActivationFunctionModel(ActivationFunctionType.LEAKY_RELU, {})));
  network.addLayer(new LayerModel(10, new ActivationFunctionModel(ActivationFunctionType.RELU, {})));
  network.addLayer(new LayerModel(1, new ActivationFunctionModel(ActivationFunctionType.LEAKY_RELU, {})));
  network.addLayer(new LayerModel(43, new ActivationFunctionModel(ActivationFunctionType.RELU, {})));
  return network;
}


function CreateFeedForwardNetwork() {
  const [networkModel, setNetworkModel] = useState(createNetworkModel);

  const { getAccessTokenSilently } = useAuth0();

  const callCreateNetworkApi = async () => {
    const token = await getAccessTokenSilently();
    axiosInstance.post(
      "/feed-forward-networks",
      JSON.stringify(networkModel),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});
  }

  return (
    <div className="create-ffn-page">
      <div className="block center-items">
        <FeedForwardNetwork networkModel={networkModel} />
      </div>
      <div className="block center-items">
        <button onClick={callCreateNetworkApi} className="create-button">Create</button> 
      </div>
    </div>
  );
}

export default CreateFeedForwardNetwork;