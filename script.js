class Car {
    constructor(hp, maxSpeed){
      this.hp = hp;
      this.maxSpeed = maxSpeed;
    };
};
  
class info extends Car {
    getInfo(name){
        alert(` model ${name} power ${this.hp} max speed ${this.maxSpeed}`)
    };
};


let bugatti = new info(1500, 500);

bugatti.getInfo('bugatti');