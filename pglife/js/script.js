function car(make, model, price ){
    this.make = make;
    this.model = model;
    this.price = price;
    this.display = function(){
        document.write(this.make + this.model + this.price);
    };
}
let car1 = new car(2132, "merchides", 102255221);
let car2 = new car(1215,"rollsroys",41213131313212);
let car3 = new car(12345, "ferrari", 1524545454);
document.write(car1.make);

