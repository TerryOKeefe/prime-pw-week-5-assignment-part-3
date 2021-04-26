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

//
console.log('Add album', addToCollection('Lies for the Liars', 'The Used', 2007, collection));
console.log(collection);
