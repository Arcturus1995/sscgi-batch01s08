// // This class represents a Pokemon, containing its name, type, level, hp, defense, and temporary defense.
class Pokemon {
  constructor(name, type, level, hp, defense) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.defense = defense || 0;
    this.temporaryDefense = 0;
  }

  attack(opponent) {
    let damage = this.calculateDamage();
    damage = this.calculateCriticalDamage(damage);
    console.log(
      `${this.trainer.name}'s ${this.name} attacks ${opponent.name} with a ${this.type} attack causing ${damage} damage!`
    );
    opponent.receiveDamage(damage);
  }

  receiveDamage(damage) {
    const totalDefense = this.defense + this.temporaryDefense;
    const netDamage = Math.max(damage - totalDefense, 0);
    this.hp -= netDamage;
    this.hp = Math.max(this.hp, 0);
    console.log(
      `${
        this.name
      } received ${netDamage} damage (defense of ${totalDefense}). Remaining HP: ${
        this.hp + totalDefense
      }.`
    );

    if (this.hp <= 0) {
      console.log(`${this.name} has fainted!`);
    }
    this.temporaryDefense = 0;
  }

  heal(amount = 20) {
    this.hp += amount;
    this.hp = Math.min(this.hp, 100);
    this.temporaryDefense = 5;
    console.log(
      `${this.name} has been healed! Current HP: ${this.hp}, Temporary Defense: ${this.temporaryDefense}.`
    );
  }
  // Calculation of Damage
  calculateDamage() {
    return this.level * 2;
  }
  // Power upd of pokemon
  powerUp() {
    this.level += 1;
    this.defense += 1;
    console.log(
      `${this.name} has powered up! Level: ${this.level}, Defense: ${this.defense}.`
    );
  }
  // 10% chance for a critical hit
  criticalHit() {
    return Math.random() < 0.1;
  }
  // Calculation of critical hit
  calculateCriticalDamage(damage) {
    if (this.criticalHit()) {
      console.log(`${this.name} lands a critical hit!`);
      return damage * 2;
    }
    return damage;
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Electric", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(
      `${this.trainer.name}'s:   ${this.name} Attack ${opponent.name}`
    );
    console.log(`${this.name} uses Thunderbolt attack on ${opponent.name}`);
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Fire", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(
      `${this.trainer.name}'s:  ${this.name} Attack  ${opponent.name}`
    );
    console.log(`${this.name} uses Fireball attack on ${opponent.name}`);
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

class EarthPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Earth", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(`${this.trainer.name}'s: ${this.name} Attack ${opponent.name}`);
    console.log(`${this.name} uses Earthquake attack on ${opponent.name}`);
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

class WindPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Wind", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(`${this.trainer.name}'s: ${this.name} Attack ${opponent.name}`);
    console.log(`${this.name} uses Tornado attack on ${opponent.name}`);
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Water", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(`${this.trainer.name}'s: ${this.name} Attack ${opponent.name}`);
    console.log(`${this.name} uses Water Blast attack on ${opponent.name}`);
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

// Trainer
class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
  }
  // Assigning the trainer to the Pokemon
  addPokemon(pokemon) {
    pokemon.trainer = this;
    this.pokemonList.push(pokemon);
  }

  selectRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
    return this.pokemonList[randomIndex];
  }
}

//Battle Simulation
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  start() {
    const selectedTrainer1Pokemon = this.trainer1.selectRandomPokemon();
    const selectedTrainer2Pokemon = this.trainer2.selectRandomPokemon();

    console.log(
      `The battle between ${this.trainer1.name} and ${this.trainer2.name} begins!`
    );
    console.log(
      `${this.trainer1.name}'s Pokémon: ${selectedTrainer1Pokemon.name}`
    );
    console.log(
      `${this.trainer2.name}'s Pokémon: ${selectedTrainer2Pokemon.name}`
    );

    try {
      if (!selectedTrainer1Pokemon || !selectedTrainer2Pokemon) {
        throw new Error("There is no pokemon on the field");
      }
      while (selectedTrainer1Pokemon.hp > 0 && selectedTrainer2Pokemon.hp > 0) {
        if (Math.random() < 0.2) {
          console.log(
            `${this.trainer1.name}'s ${selectedTrainer1Pokemon.name} decides to heal!`
          );
          selectedTrainer1Pokemon.heal();
        } else {
          selectedTrainer1Pokemon.attack(selectedTrainer2Pokemon);
        }

        if (selectedTrainer2Pokemon.hp > 0) {
          if (Math.random() < 0.2) {
            console.log(
              `${this.trainer2.name}'s ${selectedTrainer2Pokemon.name} decides to heal!`
            );
            selectedTrainer2Pokemon.heal();
          } else {
            selectedTrainer2Pokemon.attack(selectedTrainer1Pokemon);
          }
        }
      }
      console.log("Battle has ended");
    } catch (error) {
      console.error("There was error occurs on battle", error.message);
    }

    if (selectedTrainer1Pokemon.hp <= 0) {
      console.log(`${this.trainer1.name} has lost the battle!`);
    } else if (selectedTrainer2Pokemon.hp <= 0) {
      console.log(`${this.trainer2.name} has lost the battle!`);
    }
  }

  startTournament() {
    const trainer1Pokemon = [...this.trainer1.pokemonList];
    const trainer2Pokemon = [...this.trainer2.pokemonList];

    console.log(
      `The tournament between ${this.trainer1.name} and ${this.trainer2.name} begins!`
    );

    while (trainer1Pokemon.length > 0 && trainer2Pokemon.length > 0) {
      const pokemon1 = trainer1Pokemon[0];
      const pokemon2 = trainer2Pokemon[0];

      console.log(`Battle: ${pokemon1.name} vs ${pokemon2.name}`);

      while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        if (Math.random() < 0.2) {
          console.log(`${pokemon1.name} randomly heals!`);
          pokemon1.heal();
        } else {
          pokemon1.attack(pokemon2);
        }

        if (pokemon2.hp > 0) {
          if (Math.random() < 0.2) {
            console.log(`${pokemon2.name} randomly heals!`);
            pokemon2.heal();
          } else {
            pokemon2.attack(pokemon1);
          }
        }
      }

      if (pokemon1.hp <= 0) {
        console.log(`${pokemon1.name} has fainted!`);
        trainer1Pokemon.shift();
      }

      if (pokemon2.hp <= 0) {
        console.log(`${pokemon2.name} has fainted!`);
        trainer2Pokemon.shift();
      }
    }

    const winner =
      trainer1Pokemon.length > 0 ? this.trainer1.name : this.trainer2.name;
    console.log(
      "------------------------------------------------------------------------------------------"
    );
    console.log(`${winner} wins the tournament!`);
  }
}

// Random defense for each Pokemon
const randomDefense = Math.floor(Math.random() * 6);

// Example Trainers and Pokemon
let ash = new Trainer("Ash");
let brook = new Trainer("Brook");
let ken = new Trainer("Ken");
let carl = new Trainer("Carl");
let gary = new Trainer("Gary");

// Adding Pokemon with random defense
ash.addPokemon(new ElectricPokemon("Pikachu", 10, 100, randomDefense));
ash.addPokemon(new FirePokemon("Charmander", 10, 100, randomDefense));
brook.addPokemon(new WaterPokemon("Squirtle", 10, 100, randomDefense));
brook.addPokemon(new ElectricPokemon("Raichu", 10, 100, randomDefense));
ken.addPokemon(new EarthPokemon("Bulbasaur", 10, 100, randomDefense));
ken.addPokemon(new WindPokemon("Coocoo", 10, 100, randomDefense));
carl.addPokemon(new FirePokemon("Flareon", 10, 100, randomDefense));
carl.addPokemon(new WaterPokemon("Blastoise", 10, 100, randomDefense));
gary.addPokemon(new ElectricPokemon("Volt", 10, 100, randomDefense));
gary.addPokemon(new WindPokemon("Tornado", 10, 100, randomDefense));

// Random tournament
try {
  const trainers = [ash, brook, ken, carl, gary];
  if (!Array.isArray(trainers) || trainers.length < 2) {
    throw new Error(" The Tournament must contain at least 2 trainers");
  }

  const randomTrainer1 = trainers[Math.floor(Math.random() * trainers.length)];
  let randomTrainer2;

  do {
    randomTrainer2 = trainers[Math.floor(Math.random() * trainers.length)];
  } while (randomTrainer2 === randomTrainer1);

  if (!randomTrainer1 || !randomTrainer2) {
    throw new Error("Invalid trainer Selected");
  }
  const tournament = new Battle(randomTrainer1, randomTrainer2);
  tournament.startTournament();
} catch (error) {
  console.error("There was an error", error.message);
}
