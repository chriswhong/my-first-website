

// data types
var someNumber = 5
var someString = '5'

console.log(someNumber + 5)
console.log(someString + '5')

// boolean

var buttonClicked = false

console.log(buttonClicked)

$('.boolean-example').on('click', function() {
  buttonClicked = !buttonClicked;

  if (buttonClicked === true) {
    console.log('the button is on')
  } else {
    console.log('the button is off')
  }
})

// array
var firstNames = ['Chris', 'Joe', 'Susan', 'Kate']

console.log(firstNames.length)


// object
var firstNamesObject = {
  instructor: 'Chris',
  student1: 'Kelsey',
  student2: 'Lazarus',
  student3: 'Aren'
}

console.log('logging first names object', firstNamesObject)

console.log('show me the instructor', firstNamesObject.instructor)


// array of objects
var newAlbums = [
  {
    artist: 'The Beatles',
    albumName: 'The White Album',
    albumArtUrl: 'https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/tile/image/original_442.jpg'
  },
  {
    artist: 'Surfaces',
    albumName: 'Horizons',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/414%2ByG0-efL._SY445_SX342_QL70_ML2_.jpg'
  },
  {
    artist: 'Radiohead',
    albumName: 'The Bends',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VJAU9IPSL._SL1200_.jpg'
  }
]

// iterate over the array and inject a new album into the page
newAlbums.forEach(function(album) {
  $('#album-list').append(`
    <div class='album-list-item' data-album-cover='${album.albumArtUrl}'>
      <p class='artist-name'>${album.artist}</p>
      <p class='album-name'>${album.albumName}</p>
    </div>
  `)
})

// this must be moved to after the forEach() above so all of the album-list-item divs exist
// divs with this class that are added after the listener is defined will not be included
$('.album-list-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var albumCoverUrl = $(this).attr('data-album-cover')
  // log the album cover url to the console
  console.log(albumCoverUrl)

  $('#album-art').empty()

  $('#album-art').css('background-image', `url(${albumCoverUrl})`)
})
