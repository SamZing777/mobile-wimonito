import React, { useState, useEffect } from "react";
import { TabView } from "@rneui/themed";

import TabComp from '../../components/tabview';


import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const TimeTable = (props) =>{

    const img = constantImg.Image;

    const[index, setIndex] = useState(0);
    const[data, setData] = useState();

    const getTimeTable = () =>{
        fetch('')
        .then(response => response.json())
        .then(data => setData(data));
    }

    useEffect(() => {
       getTimeTable();
      },[props]);

    return(
        <ScrollView style={{ backgroundColor: "aliceblue"}}>

            <View style={styles.otherHeader}>
                <Image source={img.time_table} 
                style={styles.headerImage}
                />
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Subject Time Table
                </Text>
            </View>

            <View>
                <TabComp />

                    <TabView value={index} onChange={setIndex}>
                        <TabView.Item>
                            <View>
                                <Text style={styles.grayText}>Recent</Text>
                            </View>
                        </TabView.Item>
                        <TabView.Item>
                            <View>
                                <Text style={styles.grayText}>Recent</Text>
                            </View>
                        </TabView.Item>
                        <TabView.Item>
                            <View>
                                <Text style={styles.grayText}>Recent</Text>
                            </View>
                        </TabView.Item>
                        <TabView.Item>
                            <View>
                                <Text style={styles.grayText}>Recent</Text>
                            </View>
                        </TabView.Item>
                        <TabView.Item>
                            <View>
                                <Text style={styles.grayText}>Recent</Text>
                            </View>
                        </TabView.Item>
                </TabView>
            </View>

        </ScrollView>
    )
}

export default TimeTable;
