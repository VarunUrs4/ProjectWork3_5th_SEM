import React from "react";
import chart from "./Images/Chart.png";


const Chart = () => {
    return(<>
        <div class="border_curve chart_container">
        <h4 class="chart_title">Chart Title</h4>
        <div class="chart">
          <img src={chart} alt="" />
          <div class="legend_box">
            <h5 class="Legend_title">Legend</h5>
            <div class="legend_box_container">
              <div class="box box1">
                <div class="legend_value">100</div>
                <div class="legend_name">One</div>
              </div>
              <div class="box box1">
                <div class="legend_value">100</div>
                <div class="legend_name">One</div>
              </div>
            </div>   
          </div>
        </div> 
      </div>
    </>);
}

export default Chart;