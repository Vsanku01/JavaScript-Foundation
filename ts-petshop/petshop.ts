interface pet {
  animal: string;
  color: string;
  breed: string;
  history: string;
}

class Pets {
  public available_pets: pet[] = [];
  private _pet: pet;
  constructor(pet: pet) {
    this._pet = pet;
  }
  insert() {
    this.available_pets.push(this._pet);
  }
  get pets() {
    return this.available_pets;
  }
  // givePets() {
  //   return this.available_pets;
  // }
}

let petObj1 = new Pets({
  animal: "dog",
  color: "brown",
  breed: "Golden Retriever",
  history: "1970",
});

petObj1 = new Pets({
  animal: "cat",
  color: "white",
  breed: "Persian cat",
  history: "1620",
});

petObj1.insert();
petObj1.insert();

class RequestPets extends Pets {
  private _requestPets: pet[] = [];
  private _requestPet: pet;
  constructor(_requestedPet: pet) {
    super(_requestedPet);
    this._requestPet = _requestedPet;
    this.insert();
  }

  insert() {
    this._requestPets.push(this._requestPet);
  }

  get requestedPets() {
    return this._requestPets;
  }

  status() {
    // console.log(Pets.prototype.givePets());
    // console.log(this.available_pets);
    console.log(petObj1.pets);
  }
}

let petObj2 = new RequestPets({
  animal: "cat",
  color: "white",
  breed: "Persian cat",
  history: "1620",
});

console.log("Available Pets", petObj1.pets);
console.log("Requested Pets", petObj2.requestedPets);
