import React from 'react'


import { Card } from '../styles'

import {Text, H5} from "@adminjs/design-system";

const TaskEffort = () => {
    return(
         <Card as="a" href="#">
        <Text textAlign="center">
            <H5>Titulo </H5>
            <Text>Conteúdo</Text>
        </Text>
    </Card>
    );
};

export default TaskEffort;