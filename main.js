var SwitchList = function(obj){
  var self = this;
  
  $('.to-switch').submit(function(e){
    $(this).find('[name=list]').val(obj[params.utm_source])
  });
  
  
  function getUrlVars(url) {
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    return myJson;
  }
  
  var params = getUrlVars(location.href);
}
