// CODE here for your Lambda Classes
class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  
    destroy() {
      return `${this.name} was removed from the game.`;
    }

function CharacterStats(childAttrs) {
    GameObject.call(this, childAttrs);
    this.healthPoints = childAttrs.healthPoints;
    }
    CharacterStats.prototype = Object.create(GameObject.prototype);

    CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`;
  }

function Humanoid(grandchildAttrs) {
    CharacterStats.call(this, grandchildAttrs);
    this.team = grandchildAttrs.team;
    this.weapons = grandchildAttrs.weapons;
    this.language = grandchildAttrs.language;
    }
    Humanoid.prototype = Object.create(CharacterStats.prototype);

    Humanoid.prototype.greet = function() {
        return `${this.name} offers a greeting in ${this.language}.`;
  } 
