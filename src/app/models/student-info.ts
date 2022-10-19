export class Student {
    id?: string | undefined;
    name?: string | undefined;
    address?: string | undefined;

    constructor(id: string, name: string, address: string ) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}