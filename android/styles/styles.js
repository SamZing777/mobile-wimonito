import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(0, 100, 250)",
    borderTopLeftRadius: 20,
    borderBottomRightRadius  : 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 140,
    marginBottom: 40
  },

  otherHeader: {
    backgroundColor: "rgb(0, 100, 250)",
    borderTopLeftRadius: 20,
    borderBottomRightRadius  : 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 10,
    height: 140,
    marginBottom: 40
  },

  headingText: {
    fontSize: 18,
    color: "aliceblue"
  },
  
  profileImage: {
    width: 50, 
    height: 60,
    borderRadius: 4
  },

  headerImage: {
    width: 100,
    height: 100,
    marginLeft: 20
  },

  sectionTitle: {
    padding: 10,
    marginBottom: 20
  },

  sectionText: {
    fontSize: 18,
    color: 'gray'
  },

  body: {
    backgroundColor: "rgb(0, 100, 250)",
    borderTopLeftRadius: 20,
    borderTopRightRadius  : 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    height: 640
  },

  item: {
    marginTop: 40
  },

  itemImage: {
    width: 100,
    height: 100
  },

  itemText: {
    fontSize: 15,
    color: "aliceblue",
    marginTop: 5,
    alignSelf: "center"
  },

  content: {    
    backgroundColor: "rgb(0, 100, 250)",
    borderRadius: 10,
    height: 80,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  contentText: {
    fontSize: 15,
    color: "aliceblue",
    marginTop: 5
  },

  medicalContent: {    
    backgroundColor: "rgb(0, 100, 250)",
    borderRadius: 10,
    height: 260,
    marginBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10
  },

  medicalRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-around"
  },

  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
    padding: 10
  },

  reportRowM: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10
  },

  reportLine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20
  },

  grade: {
    backgroundColor: "#ccc",
    borderRadius: 50,
    width: 40,
    height: 40
  },

  gradeText: {
    fontSize: 22,
    color: "orange",
    textAlign: "center"
  },

  thickLineTop: {
    marginTop: 50,
    marginHorizontal: 10,
    height: 2,
    backgroundColor: "rgb(0, 100, 250)"
  },

  thickLineBtm: {
    marginHorizontal: 10,
    height: 2,
    backgroundColor: "rgb(0, 100, 250)",
    marginBottom: 50
  },

  softLine: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: "#ddd"
  },

  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },

  present: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ddd",
    width: "60%",
    borderRadius: 15,
    alignItems: "center",
  },

  grayText: {
    color: "gray",
    fontSize: 15,
  },

  sectionTitle: {
    padding: 10,
    marginBottom: 20
  },

  medicalInput: {
    height: 80,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "aliceblue",
    borderRadius: 20
  },

  assignmentContent: {    
    backgroundColor: "rgb(0, 100, 250)",
    borderRadius: 10,
    height: 160,
    marginBottom: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10
  },

  dateDue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "aliceblue", 
    bordercolor: "gray", 
    borderRadius: 20, 
    borderWidth: 1, 
    width: 180,
    marginTop: 20
  },

  timeTable: {
    width: 350,
    alignSelf: "center",
    padding: 20,
    height: 480,
    shadowOffset: 10,
    shadowOpacity: 2,
    shadowColor: "gray"
  },

  days: {
    flex: 1,
    flexDirection: "row"
  },

  subject: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  subjectItem: {
    borderRadius: 4,
    shadowColor: "gray",
    width: 120
  },

  input: {
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgb(0, 100, 250)",
    marginBottom: 10
  },

  note: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgb(0, 100, 250)",
    marginBottom: 20
  },

  previousNotes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "aliceblue", 
    bordercolor: "gray", 
    borderRadius: 20, 
    borderWidth: 1, 
    width: 180
  },

  reportText: {
    color: "rgb(0, 100, 250)",
    fontSize: 18,
  },

  scores: {
    padding: 10,
    height: 480
  },

  reportRow: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgb(0, 100, 250)",
    height: 100,
    marginTop: 20
  },

  reportRow2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#20b2be",
    height: 100
  },

  reportRow3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "rgb(0, 100, 250)",
    height: 100
  },

  profileHeader: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius  : 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    height: 140,
    marginBottom: 40
  },

  profileBody: {
    backgroundColor: "aliceblue",
    borderTopLeftRadius: 20,
    borderTopRightRadius  : 20,
    flex: 1,
    padding: 10,
    height: 640
  },

  blueText: {
    fontSize: 14,
    color: "blue"
  },
  
  profileImg: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    alignSelf: "center"
  },

  profileRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }

})

export default styles;
  