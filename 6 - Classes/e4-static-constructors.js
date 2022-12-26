class Plane3 {
    constructor(brand3, model3) {
        this.brand3 = brand3;
        this.model3 = model3;
    }

    show() {
        return this.brand3 + " / " + this.model3;
    }

    static from(brand3, model3) {
        return new Plane3(brand3, model3);
    }
}

// const plane3 = new Plane3("Boeing3", "747-800");
// console.log(plane3.show());

const plane3 = Plane3.from("Boeing", "747-800");
console.log("Brand and model:", plane3.show());