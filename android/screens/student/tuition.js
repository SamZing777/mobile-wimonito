import React from "react";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';
import * as constantImg from '../../constants/img';
import styles from "../../styles/styles";

const Tuition = () =>{

    const img = constantImg.Image;

    return(
        <ScrollView style={{ backgroundColor: "aliceblue"}}>
            <View style={styles.otherHeader}>
                <Image source={img.school_fee} 
                style={styles.headerImage}
                />
            </View>

            <View style={styles.sectionTitle}>
                <Text style={styles.sectionText}>
                    Fee Summary
                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                            School fees:
                    </Text>
                    <Text>
                        N45,000
                    </Text>
                </View>
            </View>

            <View styles={styles.row}>
                <Text style={styles.contentText}>
                    Note:
                </Text>
                <Text style={{ color: "red", textAlign: "center"}}>
                    Due date is second week of resumption
                </Text>
            </View>

            <View styles={styles.row}>
                <Text style={{ color: "red", textAlign: "center",
                 marginTop: 10, marginBottom: 20}}>
                    PAYMENT BREAKDOWN
                </Text>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                        Tuition fees:
                    </Text>
                    <Text>
                        N35,000
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                        Other Payment:
                    </Text>
                    <Text>
                        N2,500
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                            Transportation:
                    </Text>
                    <Text>
                        N4,000
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                            Service fee:
                    </Text>
                    <Text>
                        0.00
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.contentText}>
                        Discount:
                    </Text>
                    <Text style={styles.contentText}>
                        N5,000
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <View style={styles.dateDue}>
                        <Text style={styles.grayText}>
                            Total
                        </Text>
                    </View>
                    <Text style={styles.contentText}>
                        N32,500
                    </Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.row}>
                    <View>
                        <View style={styles.dateDue}>
                            <Text style={styles.grayText}>
                                Amount paid:
                            </Text>
                        </View>
                        <Text style={styles.contentText}>
                            N10,000
                        </Text>
                    </View>

                    <View style={styles.dateDue}>
                        <Text style={styles.grayText}>
                            Balance
                        </Text>
                    </View>
                    <Text style={styles.contentText}>
                        N22,500
                    </Text>
                </View>
            </View>          

        </ScrollView>
    )
}

export default Tuition;
