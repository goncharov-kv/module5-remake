const anm = ["pig", "dog", "cat", "parrot", "chicken"];
const pets = anm.splice(1, 3);
pets.splice(2, 1, "shark", "elephant");
console.log(pets)