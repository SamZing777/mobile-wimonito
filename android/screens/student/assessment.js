import React from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import styles from "../../styles/styles";
import * as constantImg from '../../constants/img';

const Assessment = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView style={{ backgroundColor: "aliceblue"}}>
            <View style={styles.otherHeader}>
                <Image source={img.assessment} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>
                        Assessment
                </Text>
                <View>
                    <Text style={styles.contentText}>
                        Score:
                    </Text>
                    <Text style={styles.contentText}>
                        25/40
                    </Text>
                </View>

                <View>
                    <Text style={styles.contentText}>
                        Grade:
                    </Text>
                    <View style={styles.grade}>
                        <Text style={styles.gradeText}>
                            B
                        </Text>
                    </View>
                </View>
            </View>     

            <View style={styles.content}>
                <Text style={styles.contentText}>
                        Assessment
                </Text>
                <View>
                    <Text style={styles.contentText}>
                        Score:
                    </Text>
                    <Text style={styles.contentText}>
                        25/40
                    </Text>
                </View>

                <View>
                    <Text style={styles.contentText}>
                        Grade:
                    </Text>
                    <View style={styles.grade}>
                        <Text style={styles.gradeText}>
                            B
                        </Text>
                    </View>
                </View>
            </View>     

        </ScrollView>
    )
}

export default Assessment;
