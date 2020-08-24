class Zebra {
  constructor(
    name,
    color = "Black and White Striped",
    gender,
    weight,
    tail = true,
    covering = "skin",
    diet = "herbivore",
    wouldFight = "No"
  ){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.tail = tail;
    this.covering = covering;
    this.diet = diet;
    this.wouldFight = wouldFight;
  }
  eats(){
    return `${this.name} is a ${this.diet}.`
  }
  fight(){
    return `Would I fight ${this.name} with my bare hands? ${this.wouldFight}.`
  }
}