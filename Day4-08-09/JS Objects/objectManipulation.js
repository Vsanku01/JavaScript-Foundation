var cat = {
  name: 'Fluffy',
  activities: ['play', 'eat cat food'],
  catFriends: [
    {
      name: 'bar',
      activities: ['be grumpy', 'eat bread omblet'],
      weight: 8,
      furcolor: 'white',
    },
    {
      name: 'foo',
      activities: ['sleep', 'pre-sleep naps'],
      weight: 3,
    },
  ],
};

// 1. Add height and weight to Fluffy
cat.weight = '3.6kg';
cat.height = '23cm';

// 2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = 'Fluffyy';
// console.log(cat)

// 3. List all the activities of Fluffyy’s catFriends.
for (let i = 0; i < cat.catFriends.length; i++) {
  console.log(cat.catFriends[i].activities);
}

// 4. Print the catFriends names.
for (let i = 0; i < cat.catFriends.length; i++) {
  console.log(cat.catFriends[i].name);
}

// 5. Print the total weight of catFriends
let totalWeight = 0;
for (let i = 0; i < cat.catFriends.length; i++) {
    totalWeight += parseInt(cat.catFriends[i].weight)
}
console.log(totalWeight)

// 6. Print the total activities of all cats (op:6)
console.log(cat.activities)
for (let i = 0; i < cat.catFriends.length; i++) {
    console.log(cat.catFriends[i].activities);
  }

// 7. Add 2 more activities to bar & foo cats

cat.catFriends[0].breed = 'British Shorthairs'
cat.catFriends[0].eyeColor = 'Blue'
cat.catFriends[1].breed = 'Korats'
cat.catFriends[1].eyeColor = 'green'
console.log(cat.catFriends)

// 8. Update the fur color of bar
cat.catFriends[0].furcolor = 'black'
console.log(cat.catFriends)
