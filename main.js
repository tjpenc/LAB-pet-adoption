const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XQ4BIT3GXlWlEkbsBhIOdUVp7kNPupCxv7hVwop9fg&s"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?Jellyfish"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://source.unsplash.com/random/600x400/?Doggo"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?Kangaroo"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://source.unsplash.com/random/600x400/?Cat"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?Chimp"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://source.unsplash.com/random/600x400/?BlackDog"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://source.unsplash.com/random/600x400/?BlueCat"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?RedCat"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://source.unsplash.com/random/600x400/?Dino"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://source.unsplash.com/random/600x400/?RedDog"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://source.unsplash.com/random/600x400/?Fish"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://source.unsplash.com/random/600x400/?Pterodactyl"
    }
  ];
// grab the div with .pet-info
  const targetingPetInfo = document.querySelector(".pet-info");
// loop through all of the pets, for each pet add the corresponding HTML to the petString string
// make the innerHTML of the .pet-info equal to petString
  let petString = "";
  for (let item of pets) {
    petString +=  `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <img src="${item.imageUrl}">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
        <p class="card-text">${item.specialSkill}</p>
      </div>
    </div>`;
  }

  targetingPetInfo.innerHTML = petString;

  // CREATING PET FILTERS - My initial way
  // if button is pressed, any object with the object property "cat", "dog", or "dino" will need to be filtered 
  // select the corresponding buttons and assign them a variable
  // add event listener of click to each button (separately)
  // reset the petSring that manipulates the innerHTML of the document
  // only add the HTML to petString if the type of pet matches with the button (aka only add HTML for dog types when dog button pressed)
  //reset petString = innerHTML of the pet-info div

  // const dogButton = document.querySelector("#Dogs");
  // const catButton = document.querySelector("#Cats");
  // const dinoButton = document.querySelector("#Dinosaurs");
  // const unFilter = document.querySelector("#All-pets");

  //   dogButton.addEventListener("click", function() {
//     petString = "";
//     for (let item of pets) {
//       if (item.type === "dog") {
//         petString += `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <img src="${item.imageUrl}">
//           <h5 class="card-title">${item.name}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
//           <p class="card-text">${item.specialSkill}</p>
//         </div>
//       </div>`;
//       }
//     } targetingPetInfo.innerHTML = petString;
//   }
// );

// catButton.addEventListener("click", function() {
//   petString = "";
//   for (let item of pets) {
//     if (item.type === "cat") {
//       petString += `<div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <img src="${item.imageUrl}">
//         <h5 class="card-title">${item.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
//         <p class="card-text">${item.specialSkill}</p>
//       </div>
//     </div>`;
//     }
//   } targetingPetInfo.innerHTML = petString;
// }
// );

// dinoButton.addEventListener("click", function() {
//   petString = "";
//   for (let item of pets) {
//     if (item.type === "dino") {
//       petString += `<div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <img src="${item.imageUrl}">
//         <h5 class="card-title">${item.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
//         <p class="card-text">${item.specialSkill}</p>
//       </div>
//     </div>`;
//     }
//   } targetingPetInfo.innerHTML = petString;
// }
// );

// unFilter.addEventListener("click", function() {
//   petString = "";
//   for (let item of pets) {
//     if (item.type) {
//       petString += `<div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <img src="${item.imageUrl}">
//         <h5 class="card-title">${item.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
//         <p class="card-text">${item.specialSkill}</p>
//       </div>
//     </div>`;
//     }
//   } targetingPetInfo.innerHTML = petString;
// }
// );
// --------------------- TRYING TO FOLLOW INSTRUCTOR WAY OF DOING IT -----------------------
  // try to use querySelectorAll to filter pets and event.target 
  // grab all buttons - assign to filterButtons variable
  //  add one event listener to all buttons - need to use forEach
  // filter what to add to innerHTML by event.target.id in an if-else statement

const filterButtons = document.querySelectorAll("button");

// handleClick function
// for each button, for each id of the target button natches that animal type, return that animal types cards in the HTML
const handleClick = function(event) {
  if (event.target.id === "Dogs") {
    showCards(dogArray);
  } else if (event.target.id === "Cats") {
    showCards(catArray);
  } else if (event.target.id === "Dinosaurs") {
    showCards(dinoArray);
  } else {
    showCards(pets);
  }
}

  // Handle button click
  filterButtons.forEach(button =>
    button.addEventListener("click", handleClick)
  );
  
// Create filtering function for pet types that pushes same type objects into array
const filterPets = function(animalType) {
  animalArray = [];
  for (const item of pets) {
    if (item.type === animalType) {
      animalArray.push(item);
    }
  } return animalArray;
}

//Initialize arrays for all pet types
const dogArray = filterPets("dog");
const catArray = filterPets("cat");
const dinoArray = filterPets("dino");

// function to recieve array of cards from either cat, dog, or dino array
const showCards = function(array) {
  petString = "";
  for (let item of array) {
      petString += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="${item.imageUrl}">
              <h5 class="card-title">${item.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${item.color} ${item.type}</h6>
              <p class="card-text">${item.specialSkill}</p>
            </div>
          </div>`;
  } targetingPetInfo.innerHTML = petString;
}
