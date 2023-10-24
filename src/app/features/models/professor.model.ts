export interface Professor {
    professorId: number;
    professorName: string;
    dateOfBirth: string | null;
    salary: number;
}

export interface AddProfessor {
    professorName: string;
    dateofBirth: Date ;
    salary: number;
}