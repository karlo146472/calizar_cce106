import React, { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calculator() {

  const [students, setStudents] = useState([
    { id: 1, name: "Karl Jun Calizar", status: "" },
    { id: 2, name: "Trisha Facundo", status: "" },
    { id: 3, name: "Allen Bucayong", status: "" },
    { id: 4, name: "Michaela Bagay", status: "" },
    { id: 5, name: "Desiree Alindajao", status: "" },
    { id: 6, name: "Joyce Jayagan", status: "" },
    { id: 7, name: "Edieson Malintad", status: "" },
    { id: 8, name: "Jade Olacao", status: "" },
    { id: 9, name: "John Denver Catulong", status: "" },
    { id: 10, name: "Dwayne Gonzales", status: "" },
  ]);

  const [presentCount, setPresentCount] = useState(0);
  const [absentCount, setAbsentCount] = useState(0);

  useEffect(() => {
    const present = students.filter(
      (student) => student.status === "present"
    ).length;

    const absent = students.filter(
      (student) => student.status === "absent"
    ).length;

    setPresentCount(present);
    setAbsentCount(absent);
  }, [students]);

  const updateAttendance = (
    id: number,
    status: "present" | "absent"
  ) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) => {
        if (student.id === id) {
          return {
            ...student,
            status: student.status === status ? "" : status,
          };
        }

        return student;
      })
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.header}>
          <Text style={styles.title}>Student Attendance</Text>
          <Text style={styles.subtitle}>
            Mark today's attendance
          </Text>
        </View>

        <View style={styles.card}>

          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Name</Text>

            <View style={styles.statusHeader}>
              <Text style={styles.headerText}>Present</Text>
              <Text style={styles.headerText}>Absent</Text>
            </View>
          </View>

          {students.map((student) => (
            <View style={styles.studentRow} key={student.id}>

              <Text style={styles.studentName}>
                {student.name}
              </Text>

              <View style={styles.buttons}>

                <Pressable
                  style={[
                    styles.checkbox,
                    student.status === "present" &&
                      styles.presentChecked,
                  ]}
                  onPress={() =>
                    updateAttendance(student.id, "present")
                  }
                >
                  {student.status === "present" && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </Pressable>

                <Pressable
                  style={[
                    styles.checkbox,
                    student.status === "absent" &&
                      styles.absentChecked,
                  ]}
                  onPress={() =>
                    updateAttendance(student.id, "absent")
                  }
                >
                  {student.status === "absent" && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </Pressable>

              </View>
            </View>
          ))}
        </View>

        <View style={styles.summary}>

          <View style={styles.summaryBoxPresent}>
            <Text style={styles.summaryNumber}>
              {presentCount}
            </Text>
            <Text style={styles.summaryLabel}>
              Present
            </Text>
          </View>

          <View style={styles.summaryBoxAbsent}>
            <Text style={styles.summaryNumber}>
              {absentCount}
            </Text>
            <Text style={styles.summaryLabel}>
              Absent
            </Text>
          </View>

        </View>

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>
            Total Students: {students.length}
          </Text>

          <Text style={styles.remainingText}>
            Not Marked:{" "}
            {students.length - presentCount - absentCount}
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF7F3",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    backgroundColor: "#CDB4DB",
    padding: 25,
    borderRadius: 25,
    marginBottom: 20,
  },

  title: {
    color: "#49384E",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#6D5A71",
    fontSize: 14,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,

    shadowColor: "#B8A9B9",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 3,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 5,
    paddingBottom: 15,

    borderBottomWidth: 1,
    borderBottomColor: "#F0E4E8",
  },

  headerText: {
    color: "#806C76",
    fontSize: 13,
    fontWeight: "bold",
  },

  statusHeader: {
    flexDirection: "row",
    gap: 25,
  },

  studentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 17,
    paddingHorizontal: 5,

    borderBottomWidth: 1,
    borderBottomColor: "#F8EFF2",
  },

  studentName: {
    color: "#49384E",
    fontSize: 15,
    fontWeight: "600",
    flex: 1,
    paddingRight: 10,
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  checkbox: {
    width: 30,
    height: 30,

    borderWidth: 2,
    borderColor: "#D8C8CF",
    borderRadius: 9,

    backgroundColor: "#FFF9F7",

    justifyContent: "center",
    alignItems: "center",
  },

  presentChecked: {
    backgroundColor: "#B8E0C2",
    borderColor: "#91C9A0",
  },

  absentChecked: {
    backgroundColor: "#F6C5C5",
    borderColor: "#E9A5A5",
  },

  check: {
    color: "#4F6354",
    fontSize: 19,
    fontWeight: "bold",
  },

  summary: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },

  summaryBoxPresent: {
    flex: 1,
    backgroundColor: "#DDF3E2",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },

  summaryBoxAbsent: {
    flex: 1,
    backgroundColor: "#FBE0E0",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },

  summaryNumber: {
    color: "#49384E",
    fontSize: 28,
    fontWeight: "bold",
  },

  summaryLabel: {
    color: "#806C76",
    fontSize: 14,
    marginTop: 3,
  },

  totalBox: {
    backgroundColor: "#E8DFF5",
    borderRadius: 18,
    padding: 18,
    marginTop: 15,
    alignItems: "center",
  },

  totalText: {
    color: "#49384E",
    fontSize: 16,
    fontWeight: "bold",
  },

  remainingText: {
    color: "#806C76",
    fontSize: 13,
    marginTop: 5,
  },
});