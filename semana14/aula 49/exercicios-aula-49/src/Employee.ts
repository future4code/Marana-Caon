import { User } from "./User";

export class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;
    static BENEFITS_VALUE: number = 5;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }

    public getAdmissionDate(): string {
        return this.admissionDate
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }
    
    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}