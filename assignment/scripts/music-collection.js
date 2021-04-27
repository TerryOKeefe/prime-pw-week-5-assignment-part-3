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
console.log('Add album', addToCollection('The Same Old Blood Rush With a New Touch', 'Cute Is What We Aim For', 2006, collection));

// Album 6
console.log('Add album', addToCollection('Epiphany', 'T-Pain', 2007, collection));

// console log the collection array
console.log(collection);
