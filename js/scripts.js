$('.album-list-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var albumCoverUrl = $(this).attr('data-album-cover')
  // log the album cover url to the console
  console.log(albumCoverUrl)

  $('#album-art').empty()

  $('#album-art').css('background-image', `url(${albumCoverUrl})`)
})
