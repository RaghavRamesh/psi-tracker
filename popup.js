var request = new XMLHttpRequest();
request.open("GET", "http://api.nea.gov.sg/api/WebAPI/?dataset=psi_update", false);
request.send();
var xml = request.responseXML;
var regions = xml.getElementsByTagName("region");

for(var i = 0; i < regions.length; i++) {
  var region = regions[i];
  var id = region.getElementsByTagName("id");
  switch (id[0].innerHTML) {
    case 'rNO': {
      document.getElementById('NO').innerHTML = region.getElementsByTagName('reading')[0].getAttribute('value');
      break;
    }
    case 'rCE': {
      document.getElementById('CE').innerHTML = region.getElementsByTagName('reading')[0].getAttribute('value');
      break;
    }
    case 'rEA': {
      document.getElementById('EA').innerHTML = region.getElementsByTagName('reading')[0].getAttribute('value');
      break;
    }
    case 'rWE': {
      document.getElementById('WE').innerHTML = region.getElementsByTagName('reading')[0].getAttribute('value');
      break;
    }
    case 'rSO': {
      document.getElementById('SO').innerHTML = region.getElementsByTagName('reading')[0].getAttribute('value');
      break;
    }
    default: {}
  }
}
