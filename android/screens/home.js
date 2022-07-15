import React, { useLayoutEffect } from 'react';

import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import * as constantImg from '../constants/img';
import styles from '../styles/styles';


const Home = ({ navigation }) =>{

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        });
    })

    const profile = () =>{
        navigation.navigate("Profile");
    }

    const assessment = () =>{
        navigation.navigate("Assessment");
    }

    const assignment = () =>{
        navigation.navigate("Assignment");
    }

    const attendance = () =>{
        navigation.navigate("Attendance");
    }

    const medical = () =>{
        navigation.navigate("Medical Fee");
    }

    const note = () =>{
        navigation.navigate("Note");
    }

    const online_class = () =>{
        navigation.navigate("Online Class");
    }

    const reports = () =>{
        navigation.navigate("Report");
    }

    const time_table = () =>{
        navigation.navigate("Time Table");
    }

    const tuition = () =>{
        navigation.navigate("Tuition");
    }

    const img = constantImg.Image;
    // const color = constantColor.Color;


    return(
        <ScrollView>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={profile}>
                    <Image source={ img.student } style={styles.profileImage} />
                </TouchableOpacity>
                <Text style={styles.headingText}>
                    Welcome Olivia Gerard!
                </Text>
            </View>
            

            <View style={styles.body}>
                
                <View style={styles.item}>
                    <TouchableOpacity onPress={assessment}>
                        <Image source={img.assessment} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Assessment
                        </Text>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.item}>
                    <TouchableOpacity onPress={assignment}>
                        <Image source={img.assignment} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Assignment
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={attendance}>
                        <Image source={img.attendance} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Attendance
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={medical}>
                        <Image source={img.medical_fee} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Medical Fee
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={note}>
                        <Image source={img.notes} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Note
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={online_class}>
                        <Image source={img.online_class} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Online Class
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={reports}>
                        <Image source={img.reports} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Report
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={tuition}>
                        <Image source={img.school_fee} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                School Fee
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={time_table}>
                        <Image source={img.time_table} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                                Time Table
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;
