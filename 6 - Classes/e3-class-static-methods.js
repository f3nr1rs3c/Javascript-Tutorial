class Plane2 {
    constructor(brand2, model2){
        this.brand2 = brand2;
        this.model2 = model2;
    }

    show(){
        return this.brand2 + " / " + this.model2;
    }

    static mergeBrandAndModel(brand2, model2){
        return brand2 + " / " + model2;
    }
}

//const brandAndModel = new Plane2("Boing2", "747-800");
//console.log(brandAndModel.show());

const brandAndModel = Plane2.mergeBrandAndModel("Boeing2", "747-800");
console.log(brandAndModel);