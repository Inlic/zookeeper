import Aardvark from './models/Aardvark.js'
import Bobcat from './models/Bobcat.js'
import Chameleleon from './models/Chameleon.js'
import Dingo from './models/Dingo.js'
import Elephant from './models/Elephant.js'
import Fox from './models/Fox.js'
import Gopher from './models/Gopher.js'
import Hummingbird from './models/Hummingbird.js'
import Impala from './models/Impala.js'
import Jaguar from './models/Jaguar.js'
import Koala from './models/Koala.js'
import Lion from './models/Lion.js'
import Mongoose from './models/Mongoose.js'
import Nuthatch from './models/Nuthatch.js'
import Ocelot from './models/Ocelot.js'
import Porcupine from './models/Porcupine.js'
import Quail from './models/Quail.js'
import Racoon from './models/Racoon.js'
import Snake from './models/Snake.js'
import Tayra from './models/Tayra.js'
import Urial from './models/Urial.js'
import Vulture from './models/Vulture.js'
import Wallaby from './models/Wallaby.js'
import Xerus from './models/Xerus.js'
import Yak from './models/Yak.js'
import Zebra from './models/Zebra.js'

// must pass undefined on a default to get the default parameter

// let aAnimal = new Aardvark("Amanda","brown","female",100)
// let bAnimal = new Bobcat("Billy","brownish","male",100)
// let cAnimal = new Chameleleon("Chester","green","male",100)
// let dAnimal = new Dingo("Dick", "tan", "male",100)
// let eAnimal = new Elephant("Emily","grey","female",100)
// let fAnimal = new Fox("Freddy", "orange","male",100)
// let gAnimal = new Gopher("Gretta", "brown", "female",100)
// let hAnimal = new Hummingbird("Holly", "green","female",100)
// let iAnimal = new Impala("Ian","tan","male",100)
// let jAnimal = new Jaguar("Jake","spotted","male",100)
// let kAnimal = new Koala("Katey","grey","female",100)
// let lAnimal = new Lion("Leo","golden","male",100)
// let mAnimal = new Mongoose("Mary","brown","female",100)
// let nAnimal = new Nuthatch("Nate","black white and yellow","male",100)
// let oAnimal = new Ocelot("Oscar","spotted","male",100)
// let pAnimal = new Porcupine("Penny","brown","female",100)
// let qAnimal = new Quail("Quincey", "brown", "male",100)
// let rAnimal = new Racoon("Rockey","brownish","male",100)
// let sAnimal = new Snake("Sandra","green","female",100)
// let tAnimal = new Tayra("Tommy","brownish","male",100)
// let uAnimal = new Urial("Uma","reddish","female",100)
// let vAnimal = new Vulture("Vickey","blackish","female",100)
// let wAnimal = new Wallaby("Wesley","brownish","male",100)
// let xAnimal = new Xerus("Xenu","tan","male",100)
// let yAnimal = new Yak("Yancey","black","male",100)
// let zAnimal = new Zebra("Zack","black and white striped","male",100)

let zoolist = {
  aAnimal: new Aardvark("Amanda","brown","female",100),
  bAnimal: new Bobcat("Billy","brownish","male",100),
  cAnimal: new Chameleleon("Chester","green","male",100),
  dAnimal: new Dingo("Dick", "tan", "male",100),
  fAnimal: new Fox("Freddy", "orange","male",100)
}

function drawAnimals(){
  let template = '<ol>'
  for (let key in zoolist ){
    let animal = zoolist[key]
    template += `<li>${animal.fight()}</li>`
  }
  template += `</ol>`
  document.getElementById('zoo').innerHTML = template;
}

drawAnimals()