class Koala {
  constructor(
    name,
    color = "grey",
    gender,
    weight,
    tail = false,
    covering = "skin",
    diet = "herbivore",
    wouldFight = "Yes",
    sillyName = "Drop Bear"
  ){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tail = tail;
    this.covering = covering;
    this.diet = diet;
    this.wouldFight = wouldFight;
    this.sillyName = sillyName;
  }
  eats(){
    return `${this.name} is a ${this.diet}.`
  }
  fight(){
    return `Would I fight ${this.name} with my bare hands? ${this.wouldFight}.`
  }
  silly(){
    return `${this.name} is also known as a ${this.sillyName}`
  }
}

export default Koala