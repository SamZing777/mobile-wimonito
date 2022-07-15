import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/home';
import Profile from '../screens/student/profile';
import Assessment from '../screens/student/assessment';
import Assignment from '../screens/student/assignment';
import Attendance from '../screens/student/attendance';
import MedicalFee from '../screens/student/medical_fee';
import Note from '../screens/student/notes';
import OnlineClass from '../screens/student/online';
import Report from '../screens/student/report';
import TimeTable from '../screens/student/time-table';
import Tuition from '../screens/student/tuition';


const Stack = createNativeStackNavigator();

const ScreenStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Assessment" component={Assessment} />
            <Stack.Screen name="Assignment" component={Assignment} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="Medical Fee" component={MedicalFee} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="Online Class" component={OnlineClass} />
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="Time Table" component={TimeTable} />
            <Stack.Screen name="Tuition" component={Tuition} />
        </Stack.Navigator>
    )
}

export default ScreenStack;
