export interface Student {
    studentId: number;
    studentName: string;
    dateOfBirth: string | null;
    enrollmentNumber: number;
}
export interface AddStudent {
    studentName: string;
    dateOfBirth: Date;
    enrollmentNumber: number;
}

export interface StudentGrades extends Array<DisciplineGrade>{
 id: number,
 studentId: number;
 studentName: string;
 disciplineGrade: DisciplineGrade[];
}

interface DisciplineGrade {
    disciplineName: string;
    grade: number;
}


