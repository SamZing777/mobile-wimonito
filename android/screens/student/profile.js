import React, { useState } from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
    TextInput
  } from 'react-native';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const Profile = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView style={{backgroundColor: "rgb(0, 100, 250)"}}>

            <View style={styles.profileHeader}>
                <Image source={img.student} 
                style={styles.profileImg}/>
            </View>

            <View style={styles.profileBody}>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>First Name</Text>
                    <Text style={styles.blueText}>Ibrohim</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Surname</Text>
                    <Text style={styles.blueText}>Adefowope</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Gender</Text>
                    <Text style={styles.blueText}>Male</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Date of birth</Text>
                    <Text style={styles.blueText}>01/05/1999</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Religion</Text>
                    <Text style={styles.blueText}>Islam</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>State of Origin</Text>
                    <Text style={styles.blueText}>Ogun state</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Nationality</Text>
                    <Text style={styles.blueText}>Nigerian</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Guardian</Text>
                    <Text style={styles.blueText}>Rasheed Aashimolowo</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Phone</Text>
                    <Text style={styles.blueText}>08169400410</Text>
                </View>
                <View style={styles.profileRow}>
                    <Text style={styles.grayText}>Email</Text>
                    <Text style={styles.blueText}>Adeyinkadaniel09@gmail.com</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Profile;
