function entry_to_url(entry) {
  var base = 'https://maps.googleapis.com/maps/api/streetview';
  var size = '?size=300x300';
  var location = '&location=' + entry.lat + ',' + entry.lng;
  var heading = '&heading=' + entry.heading;
  var pitch = '&pitch=' + entry.pitch;
  var key = '&key=AIzaSyC6fnYlMyBFPpQMDRwxLFtrPp_FuFBS6LY';
  return base + size + location + heading + pitch + key;
};
(function() {
  Papa.parse('markers.csv', {
    download: true,
    header: true,
    delimiter: ',',
    skipEmptyLines: true,
    complete: function(params, url) {
      params.data.forEach(function(entry) {
        var url = entry_to_url(entry);
        var tag = '<div class="card"><img class="card-img-top" src="' + url + '"><div class="card-body"><h5 class="card-title">' + entry.title + '</h5><p class="card-text">' + entry.description + '</p></div></div>'

        $('.card-columns').append(tag)
      });
    }
  })
})();
