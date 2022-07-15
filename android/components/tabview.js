import React, {useState} from "react";
import { Tab, TabView } from "@rneui/themed";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';

const TabComp = () =>{

    const[index, setIndex] = useState(0);

    return(
        <Tab value={index} onChange={setIndex} variant="primary">
            <Tab.Item title="Mon" />
            <Tab.Item title="Tue" />
            <Tab.Item title="Wed" />
            <Tab.Item title="Thu" />
            <Tab.Item title="Fri" />
        </Tab>
    )
}

export default TabComp;
