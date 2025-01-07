// This class represents a Pokemon, containing its name, type, level, hp, defense, and temporary defense.
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
      `💖 ${this.name} has been healed! Current HP: ${this.hp}, Temporary Defense: ${this.temporaryDefense}💖 .`
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
      console.log(
        `%c💥${this.name} lands a critical hit!💥`,
        "color:red;font-size:15;font-weight:bold"
      );
      return damage * 2;
    }
    return damage;
  }
}
// ElectricPokemon subclass, extending the base Pokemon class
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Electric", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s:  ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c⚡⚡⚡${this.name} uses Thunderbolt attack on ${opponent.name}⚡⚡⚡`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// FirePokemon subclass, extending the base Pokemon class
class FirePokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Fire", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s:  ${this.name} Attack  ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🔥💥${this.name} uses Fireball attack on ${opponent.name}🔥💥`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

// EarthPokemon subclass, extending the base Pokemon class
class EarthPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Earth", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🌋${this.name} uses Earthquake attack on ${opponent.name}🌋`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// WindPokemon subclass, extending the base Pokemon class
class WindPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Wind", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c💨${this.name} uses Tornado attack on ${opponent.name}💨`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// WaterPokemon subclass, extending the base Pokemon class
class WaterPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Water", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🌊${this.name} uses Water Blast attack on ${opponent.name}🌊`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
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
    this.hasBattled = false; // Track if trainer has battled
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

// Battle Simulation
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  start() {
    const selectedTrainer1Pokemon = this.trainer1.selectRandomPokemon();
    const selectedTrainer2Pokemon = this.trainer2.selectRandomPokemon();

    console.log(
      `%c⚡The battle between ${this.trainer1.name} and ${this.trainer2.name} begins!⚡`,
      "color: red; font-weight:bold; font-size:20px; font-family: 'Courier New';padding-right: 50px; padding-left: 50px;"
    );
    console.log(
      `%c${this.trainer1.name}'s Pokemon: ${selectedTrainer1Pokemon.name}`,
      "background: rgb(113, 217, 108); padding-left: 50px; padding-right: 50px; font-size:20px; font-family: 'Courier New; "
    );
    console.log(
      `%c${this.trainer2.name}'s Pokemon: ${selectedTrainer2Pokemon.name}`,
      "background: rgb(113, 217, 108);  padding-right: 50px; padding-left: 50px; font-size:20px; font-family: 'Courier New;  "
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
      return false; // Trainer 1 lost
    } else if (selectedTrainer2Pokemon.hp <= 0) {
      console.log(`${this.trainer2.name} has lost the battle!`);
      return true; // Trainer 1 wins
    }
  }

  // Set a tournament with up to 5 rounds
  startTournament() {
    let winner = this.trainer1;
    let rounds = 0;

    console.log(
      `%cThe Tournament begins with %c${this.trainer1.name}`,
      "color: White; font-size: 25px; font-family: 'Courier New'; font-weight: bold; text-transform: uppercase; background: rgb(87, 79, 79); padding-left:200px",
      "color: yellow; font-size: 25px; font-family: 'Courier New'; font-weight: bold; text-transform: uppercase; background: rgb(87, 79, 79); padding-right:200px"
    );

    while (
      rounds < 5 &&
      this.trainer1.pokemonList.length > 0 &&
      this.trainer2.pokemonList.length > 0
    ) {
      console.log(
        `%c----------------------------ROUND ${
          rounds + 1
        }----------------------------------`,
        "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
      );
      console.log(
        `%cRound ${rounds + 1}: ${winner.name} continues to battle!`,
        "color: red; font-weight:bold; font-size: 20px; font-style: italic"
      );
      const randomTrainer1 = winner;
      let randomTrainer2;

      do {
        randomTrainer2 = this.getRandomTrainer();
      } while (randomTrainer2 === randomTrainer1);

      const battle = new Battle(randomTrainer1, randomTrainer2);
      const result = battle.start();

      if (!result) {
        // If trainer1 loses, remove from tournament
        winner = randomTrainer2;
      }

      rounds++;
    }

    console.log("The tournament has ended!");
    console.log(`${winner.name} is the champion of the tournament!`);
  }

  // Get a random trainer who has not lost
  getRandomTrainer() {
    const trainers = [ash, brook, ken, carl, gary].filter(
      (trainer) => trainer !== this.trainer1 && trainer !== this.trainer2
    );
    return trainers[Math.floor(Math.random() * trainers.length)];
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
