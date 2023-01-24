import React from 'react'


import { Card } from '../styles'

import {Text, H5} from "@adminjs/design-system";
import { Chart } from "react-google-charts";
 const data = [
    [
      {
        type: "date",
        id: "Date",
      },
      {
        type: "number",
        id: "Won/Loss",
      },
    ],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    
  ];

const TaskEffort = () => {
    return(
         <Card as="a" href="#">
        <Text textAlign="center">
            <H5>Titulo </H5>
            <Text> 
              <Chart
      chartType="Calendar"
      width="100%"
      height="400px"
      data={data}
    /></Text>
        </Text>
    </Card>
    );
};

export default TaskEffort;