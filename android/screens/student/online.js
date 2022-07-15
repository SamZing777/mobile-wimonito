import React from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const OnlineClass = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView style={{ backgroundColor: "aliceblue"}}>
            <View style={styles.otherHeader}>
                <Image source={img.online_class} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Upcoming Classes
                </Text>
            </View>

            <View style={styles.content}>
                <View>
                    <Text style={styles.contentText}>
                            Social studies
                    </Text>
                    <Text style={styles.contentText}>
                            Topic: Nuclear Family
                    </Text>
                </View>
                <View>
                    <Text style={styles.contentText}>
                        30/05/2022
                    </Text>
                    <Text style={styles.contentText}>
                        11:00 AM
                    </Text>
                </View>
            </View>  

            <View style={styles.content}>
                <View>
                    <Text style={styles.contentText}>
                            Social studies
                    </Text>
                    <Text style={styles.contentText}>
                            Topic: Nuclear Family
                    </Text>
                </View>
                <View>
                    <Text style={styles.contentText}>
                        30/05/2022
                    </Text>
                    <Text style={styles.contentText}>
                        11:00 AM
                    </Text>
                </View>
            </View> 

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Previous Classes
                </Text>
            </View>  

            <View style={styles.content}>
                <View>
                    <Text style={styles.contentText}>
                            Social studies
                    </Text>
                    <Text style={styles.contentText}>
                            Topic: Nuclear Family
                    </Text>
                </View>
                <View>
                    <Text style={styles.contentText}>
                        30/05/2022
                    </Text>
                    <Text style={styles.contentText}>
                        11:00 AM
                    </Text>
                </View>
            </View> 

            <View style={styles.content}>
                <View>
                    <Text style={styles.contentText}>
                            Social studies
                    </Text>
                    <Text style={styles.contentText}>
                            Topic: Nuclear Family
                    </Text>
                </View>
                <View>
                    <Text style={styles.contentText}>
                        30/05/2022
                    </Text>
                    <Text style={styles.contentText}>
                        11:00 AM
                    </Text>
                </View>
            </View>             

        </ScrollView>
    )
}

export default OnlineClass;
