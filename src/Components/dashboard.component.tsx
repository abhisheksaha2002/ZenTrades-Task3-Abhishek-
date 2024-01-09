import React from "react";
import Card from "./card.component";
import { cardData } from "../Utils/support-functions.util";
import BarGraph from "./graph.component";
import GraphComponent from "./graph.component";
import { graph_1_data, graph_2_data } from "../Utils/support-functions.util";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="h-2/5 w-full">
          <div className="h-16 w-full text-xl p-4">Company Metrics</div>
          <div className="h-full w-full p-4">
            <div className="grid grid-cols-4 gap-4">
              {cardData.map((card: any, index: any) => (
                <Card key={index} name={card.title} value={card.value} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-3/5 w-full flex">
          <div className="h-full w-1/2 p-4">
            <div className="text-xl flex items-center justify-center">
              Revenue By Job Location
            </div>
            <GraphComponent data={graph_1_data} />
          </div>
          <div className="h-full w-1/2 p-4">
            <div className="text-xl flex items-center justify-center">
              Revenue By Job Title
            </div>
            <GraphComponent data={graph_2_data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;