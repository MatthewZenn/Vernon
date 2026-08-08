const types = ["Transposition", "Teleportation", "Prediction", "Duplication", "Vanish", "Production", "Transformation", "Restoration", "ACAAN", "Penetration", "Levitation", "Escape", "Book Test"];
const props = ["Coins", "Cards", "a Ring", "a Phone", "String", "Random Objects", "a Book", "Nothing", "Dice"];
const theme = ["light", "dark"]

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

document.getElementById('generate').addEventListener('click', idea);

function idea() {
  document.documentElement.setAttribute('theme', theme.random());
  document.getElementById('prompt').innerHTML = " ";
  document.getElementById('prompt').innerHTML = types.random() + " effect performed with " + props.random()+".";
}

idea();