import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Assessment from '../screens/student/assessment';
import Attendance from '../screens/student/attendance';
import MedicalFee from '../screens/student/medical_fee';
import Note from '../screens/student/notes';
import OnlineClass from '../screens/student/online';
import Report from '../screens/student/report';
import TimeTable from '../screens/student/time-table';
import Tuition from '../screens/student/tuition';

const Stack = createStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Assessment" component={Assessment} />
        </Stack.Navigator>
    )
}

export default HomeStack;
