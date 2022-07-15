import React, { useState } from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    Button
  } from 'react-native';
import styles from "../../styles/styles";
import * as constantImg from '../../constants/img';

const MedicalFee = () =>{

    const img = constantImg.Image;

    const[comment, setComment] = useState('');

    // const input = () =>{
    //     setComment(comment + " the comment");
    // }

    return(
        <ScrollView style={{ backgroundColor: "aliceblue"}}>
            <View style={styles.otherHeader}>
                <Image source={img.medical_fee} 
                style={styles.headerImage}/>
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Medical Summary
                </Text>
            </View>

            <View style={styles.medicalContent}>
                <View style={styles.medicalRow}>
                    <Text style={styles.contentText}>
                        Headache and Malaria
                    </Text>
                    <Text style={styles.contentText}>
                        Mr. Joseph (Sch Nurse)
                    </Text>
                </View>

                <View style={styles.medicalRow}>
                    <Text style={styles.grayText}>
                        Symptoms
                    </Text>
                    <Text style={styles.grayText}>
                        Staff in charge
                    </Text>
                </View>

                <View style={styles.medicalSection}>
                    <Text style={styles.contentText}>
                        Comments
                    </Text>
                    <TextInput
                    onChangeText={(e) => {
                        setComment(e);
                    }}
                    style={styles.medicalInput}
                    value={comment}
                    />
                    <Text style={{alignSelf: "flex-end"}}>
                        05/06/2022
                    </Text>
                </View>
            </View>   

            <View style={styles.sectionTitle}>
                <Text style={{color: "black", textAlign: "center"}}>
                    {comment}
                </Text>
            </View>  
        </ScrollView>
    )
}

export default MedicalFee;
