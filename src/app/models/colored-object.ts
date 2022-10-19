import { Color } from "./color-list";

export class ColoredObject {
    id?: number;
    name?: string;
    color: Color;
    isDisabled: boolean = true;

    constructor(id: number,name: string, color: number) {
        this.id = id
        this.name = name;
        this.color = color;
    }
}

