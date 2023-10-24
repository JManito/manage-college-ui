export interface CourseInfo extends Array<CourseStudentAverages> {
    id: number;
    courseId: number;
    courseName: string;
    professorNr: number;
    courseStudentAverages: CourseStudentAverages[];
}

interface CourseStudentAverages {
    studentId: number;
    studentName: string;
    average: number;
}
