import React from "react";
import styles from "../../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import { Checkbox } from "react-native-paper";
import * as constantImg from '../../constants/img';

const Attendance = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView>
            <View style={styles.otherHeader}>
                <Image source={img.attendance} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Attendance
                </Text>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <View style={styles.present}>
                        <Text style={styles.grayText}>Present</Text>
                        <Checkbox label="Present" status="checked" style={styles.grayText}/>
                    </View>
                    <Text style={styles.grayText}>Comment:</Text>
                </View>
                <Text style={styles.grayText}>
                    24/02/2022
                </Text>
            </View>

            <View>
                <Text>
                    
                </Text>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <View style={styles.present}>
                        <Text style={styles.grayText}>Absent</Text>
                        <Checkbox label="Present" status="checked" style={styles.grayText}/>
                    </View>
                    <Text style={styles.grayText}>Comment:</Text>
                </View>
                <Text style={styles.grayText}>
                    24/02/2022
                </Text>
            </View>
        </ScrollView>
    )
}

export default Attendance;
