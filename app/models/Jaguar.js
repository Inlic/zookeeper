class Jaguar {
  constructor(
    name,
    color,
    gender,
    weight,
    tail = true,
    covering = "fur",
    diet = "carnivore",
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

export default Jaguar