export class EmployeeModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public birthDate: Date;

    public constructor(id: number, firstName: string, lastName: string, birthDate: Date ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = birthDate
        
    }

}