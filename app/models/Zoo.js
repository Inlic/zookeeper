class Zoo {
  constructor(){
    this.herbivores = []
    this.carnivores = []
    this.omnivores = []
  }
  addCarnivores(arr){
    arr.forEach(c => this.carnivores.push(c))
  }
  addHerbivores(arr){
    arr.forEach(h => this.herbivores.push(h))
  }
  addOmnivores(arr){
    arr.forEach(o => this.omnivores.push(o))

  }
}