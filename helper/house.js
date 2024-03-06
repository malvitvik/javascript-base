import { Cat } from "./cat.js";

class House {

    /**
     * 
     * @param {Array<Cat>} cats 
     */
    constructor(cats) {
        this.cats = cats;
    }

    print() {
        this.cats.forEach(cat => {
            cat.say();
        });
    }
}

export const house = new House([new Cat('Tiger'), new Cat('Lucky'), new Cat('Shadow')])