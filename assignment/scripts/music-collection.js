console.log('***** Music Collection *****')

// create a variable called collection that starts as an empty array
const collection = []; // my collection

// add a function named addToCollection
// input parameters of title, artist, yearPublished
function addToCollection( title, artist, yearPublished, array){
  const album = {
    Title: title,
    Artist: artist,
    YearPublished: yearPublished,
  }
  array.push(album);
  return album;
}

console.log('1.) - Add a addToCollection Function and Test');
// Add 6 Albums to test function

// Album 1
console.log('Add album', addToCollection('Lies for the Liars', 'The Used', 2007, collection));

// Album 2
console.log('Add album', addToCollection('Nothing Personal', 'All Time Low', 2009, collection));

// Album 3
console.log('Add album', addToCollection('Pioneer', 'The Maine', 2011, collection));

// Album 4
console.log('Add album', addToCollection('Disgusting', 'Beartooth', 2014, collection));

// Album 5
console.log('Add album', addToCollection('Black & White', 'The Maine', 2010, collection));

// Album 6
console.log('Add album', addToCollection('Epiphany', 'T-Pain', 2007, collection));

// console log the collection array
console.log('My collection:', collection);

console.log('2.) - Add a showCollection Function and Test');
// Add a function named showCollection
function showCollection( array ) { // start showCollection
  console.log('Number of albums:', array.length);
  for (let i = 0; i < array.length; i++) { // loop to find values in array
    console.log(array[i].Title, 'by', array[i].Artist, `published in ${array[i].YearPublished}`);
  }
  return array; // end showCollection
}

// test the showCollection function
// not sure which one is wanted to show the test so I'll do both
showCollection(collection);
console.log('2a.) - Alternate Test to showCollection');
console.log('Test - Should show collection:', showCollection(collection));

console.log('3.) - Add a findByArtist Function and Test');
// Add a function named findByArtist

// Take in artist (a string) parameter
function findByArtist( array, artist ) {
  //create an array to hold any results, empty to start
  const foundArtist = [];
  //loop through the collection and add any objects with a matching artist to the array
  for (let i = 0; i < array.length; i++) {
    if (artist === array[i].Artist) { // find exact match of artist in object
      foundArtist.push(array[i]); // push match into foundArtist
    } else if (artist !== array[i].Artist) { // if artist does not match
      let foundArtist = []; // empty array if match not found
    }
  }
  return foundArtist;
} // end findByArtist function

// check if the function works in the beginning of the array
console.log('Test - Should show T-Pain array', findByArtist(collection, 'T-Pain'));
// check if the function works at the end of the array
console.log('Test- Should show The Used array', findByArtist(collection, 'The Used'));
//check if the function can pull 1 or more of same artist
console.log('Test - Should show 2 The Maine arrays', findByArtist(collection, 'The Maine'));
//check if the function returns empty if no match
console.log('Test - Should show empty array', findByArtist(collection, 'Rolling Stones'));
