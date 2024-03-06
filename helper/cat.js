export class Cat {

    constructor(name) {
        this.name = name;
        this.feededAmount = 0;
    }

    say() {
        console.log(`${this.name} cat say 'Meow'`);
    }
}