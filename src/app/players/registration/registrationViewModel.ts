import { Position } from './position'

export class RegistraionViewModel {
    firstName: string;
    lastName: string;
    email: string;
    biography: string;
    dob: Date;
    teamIdJoin: number;
    heightInFeet: number;
    heightInInches: number;
    weight: number;
    injuries: string[];
    position: Position
    password: string;

    constructor() {
        this.injuries = [];
    }
}