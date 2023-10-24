export interface DisciplineInfo extends disciplineProfessor, Array<DisciplineStudent>{
    id: number;
    disciplineId: number;
    disciplineName: string;
    disciplineProfessor: disciplineProfessor;
    classNumber: number,
    disciplineStudent: DisciplineStudent[];
}

interface disciplineProfessor {
    professorId: number;
    professorName: string;
    dateOfBirth: Date;
    salary: number;

}
interface DisciplineStudent {
    studentName: string;
    grade: number;
}
