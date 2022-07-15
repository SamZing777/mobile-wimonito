import React from "react";
import styles from "../../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import * as constantImg from '../../constants/img';

const Assignment = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView>
            <View style={styles.otherHeader}>
                <Image source={img.assignment} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Pending Assignment
                </Text>
            </View>

            <View style={styles.assignmentContent}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                        Computer Studies
                    </Text>
                    <Text style={styles.contentText}>
                        15 Marks
                    </Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.contentText}>
                        What is computer?
                    </Text>
                    <Text style={styles.contentText}>
                        
                        List four components of a computer
                    </Text>
                </View>

                <View style={styles.dateDue}>
                    <Text style={styles.grayText}> Due date: May 25, 2013</Text>
                </View>
            </View>   

            <View style={styles.assignmentContent}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                        Computer Studies
                    </Text>
                    <Text style={styles.contentText}>
                        15 Marks
                    </Text>
                </View>

                <View style={styles.column}>
                    <Text style={styles.contentText}>
                        What is computer?
                    </Text>
                    <Text style={styles.contentText}>
                        List four components of a computer
                    </Text>
                </View>

                <View style={styles.dateDue}>
                    <Text style={styles.grayText}> Due date: May 25, 2013</Text>
                </View>
            </View> 

        </ScrollView>
    )
}

export default Assignment;
