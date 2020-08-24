class Snake {
  constructor(
    name,
    color,
    gender,
    weight,
    tail = true,
    covering = "scales",
    diet = "carnivore",
    wouldFight = "No",
    sillyName = "Nope Rope"
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

export default Snake