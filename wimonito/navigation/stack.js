import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Attendance from '../screens/students/attendance';
import Assessment from '../screens/students/assessment';
import MedicalFee from '../screens/students/medical_fee';
import Notes from '../screens/students/notes';
import OnlineClass from '../screens/students/online';
import Report from '../screens/students/report';
import TimeTable from '../screens/students/time-table';
import Tuition from '../screens/students/tuition';


const Stack = createStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Assessment" component={Assessment} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="MedicalFee" component={MedicalFee} />
            <Stack.Screen name="Notes" component={Notes} />
            <Stack.Screen name="OnlineClass" component={OnlineClass} />
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="TimeTable" component={TimeTable} />
            <Stack.Screen name="Tuition" component={Tuition} />
        </Stack.Navigator>
    )
}

export default HomeStack;
