import React from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const Report = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView>
           <View style={styles.otherHeader}>
                <Image source={img.reports} 
                style={styles.headerImage}/>
            </View>

            <View style={[styles.sectionTitle, {marginBottom: -20}]}>
                <Text style={styles.sectionText}>
                    First Term
                </Text>
            </View>  

            <View style={styles.thickLineTop}></View>
            <View style={styles.reportLine}>
                <Text style={styles.grayText}>
                    Performance Profile
                </Text>
            </View>
            <View style={styles.thickLineBtm}></View>

            <View style={styles.softLine}></View>
                <View style={styles.reportRowM}>
                    <Text style={styles.grayText}>
                        I.D Number
                    </Text>
                    <Text style={styles.reportText}>
                        015
                    </Text>
                </View>
            <View style={styles.softLine}></View>

            <View style={styles.softLine}></View>
                <View style={styles.reportRowM}>
                    <Text style={styles.grayText}>
                        Score
                    </Text>
                    <Text style={styles.reportText}>
                        877/1200
                    </Text>
                </View>
            <View style={styles.softLine}></View>

            <View style={styles.softLine}></View>
                <View style={styles.reportRowM}>
                    <Text style={styles.grayText}>
                        Position in class
                    </Text>
                    <Text style={styles.reportText}>
                       5
                    </Text>
                </View>
            <View style={styles.softLine}></View>

            <View style={styles.softLine}></View>
                <View style={styles.reportRowM}>
                    <Text style={styles.grayText}>
                        Percentage
                    </Text>
                    <Text style={styles.reportText}>
                        80%
                    </Text>
                </View>
            <View style={styles.softLine}></View>

            <View style={styles.thickLineTop}></View>
            <View style={styles.reportLine}>
                <Text style={styles.grayText}>
                    Assessment Analysis
                </Text>
            </View>
            <View style={styles.thickLineBtm}></View>
            
            <View style={styles.reportRow}>
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        English Language
                    </Text>
                    <Text style={styles.contentText}>
                        77.83
                    </Text>
                </View>

                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        CA
                    </Text>
                    <Text style={styles.contentText}>
                        Exam
                    </Text>
                    <Text style={styles.contentText}>
                        Total score
                    </Text>
                </View> 
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        30
                    </Text>
                    <Text style={styles.contentText}>
                        60
                    </Text>
                    <Text style={styles.contentText}>
                        90/120
                    </Text>     
                </View>  
            </View>     

            <View style={styles.reportRow2}>
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        Mathematics
                    </Text>
                    <Text style={styles.contentText}>
                        77.83
                    </Text>
                </View>

                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        CA
                    </Text>
                    <Text style={styles.contentText}>
                        Exam
                    </Text>
                    <Text style={styles.contentText}>
                        Total score
                    </Text>
                </View> 
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        30
                    </Text>
                    <Text style={styles.contentText}>
                        60
                    </Text>
                    <Text style={styles.contentText}>
                        90/120
                    </Text>     
                </View>  
            </View>      

            <View style={styles.reportRow3}>
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        English Language
                    </Text>
                    <Text style={styles.contentText}>
                        77.83
                    </Text>
                </View>

                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        CA
                    </Text>
                    <Text style={styles.contentText}>
                        Exam
                    </Text>
                    <Text style={styles.contentText}>
                        Total score
                    </Text>
                </View> 
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        30
                    </Text>
                    <Text style={styles.contentText}>
                        60
                    </Text>
                    <Text style={styles.contentText}>
                        90/120
                    </Text>     
                </View>  
            </View>    

            <View style={styles.reportRow2}>
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        Mathematics
                    </Text>
                    <Text style={styles.contentText}>
                        77.83
                    </Text>
                </View>

                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        CA
                    </Text>
                    <Text style={styles.contentText}>
                        Exam
                    </Text>
                    <Text style={styles.contentText}>
                        Total score
                    </Text>
                </View> 
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        30
                    </Text>
                    <Text style={styles.contentText}>
                        60
                    </Text>
                    <Text style={styles.contentText}>
                        90/120
                    </Text>     
                </View>  
            </View>   

            <View style={styles.reportRow3}>
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        English Language
                    </Text>
                    <Text style={styles.contentText}>
                        77.83
                    </Text>
                </View>

                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        CA
                    </Text>
                    <Text style={styles.contentText}>
                        Exam
                    </Text>
                    <Text style={styles.contentText}>
                        Total score
                    </Text>
                </View> 
                <View style={styles.reportRowM}>
                    <Text style={styles.contentText}>
                        30
                    </Text>
                    <Text style={styles.contentText}>
                        60
                    </Text>
                    <Text style={styles.contentText}>
                        90/120
                    </Text>     
                </View>  
            </View>                     
           
        </ScrollView>
    )
}

export default Report;
