import React, { useState } from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
    TextInput
  } from 'react-native';
import Checkbox from 'react-native-paper';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const Note = () =>{

    const img = constantImg.Image;

    const[comment, setComment] = useState('');

    return(
        <ScrollView>
            <View style={styles.otherHeader}>
                <Image source={img.notes} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Note
                </Text>
            </View>  

            <View style={styles.row}>
                <View style={styles.dateDue}>
                    <Text style={styles.grayText}>
                        Parent - School
                    </Text>
                </View>
                <View style={styles.dateDue}>
                    <Text style={styles.grayText}>
                        School - Parent
                    </Text>
                </View>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Compose
                </Text>
                <TextInput
                    onChangeText={(e) => {
                        setComment(e);
                    }}
                    style={styles.input}
                    value={comment}
                    />
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Previous Note
                </Text>
            </View> 

            <View style={styles.note}>
                <View>
                    <Text style={styles.grayText}>
                        Urgent! Check your ward
                    </Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.dateDue}>
                        <Text style={styles.grayText}>
                            School - Parent
                        </Text>
                    </View>
                    <Text style={{color: "gray", marginTop: 20, marginLeft: 10}}>
                        Wednesday, June 5, 2013
                    </Text>
                </View>
            </View>

            <View style={styles.note}>
                <View>
                    <Text style={styles.grayText}>
                        Urgent! Check your ward
                    </Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.dateDue}>
                        <Text style={styles.grayText}>
                            School - Parent
                        </Text>
                    </View>
                    <Text style={{color: "gray", marginTop: 20, marginLeft: 10}}>
                        Wednesday, June 5, 2013
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default Note;
