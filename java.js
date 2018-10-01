
function aste(n){
    if(typeof n != "number"){
        n=5;
    }
    for(var i=0; i<n; i++ ){
        var string = ''
        for(var j=0; j<n-i; j++){
            string = string + '*'
            
        }
        console.log(string)
    }
}
function af(n){
    
    var cont = ''
    for(var i=0; i>n;i++){
        cont = cont + '*'
        console.log(cont)
    }
}
var result = ' ';
function rep(n){
    for(var i=0; i<=n ; i++){
        result += ' '.repeat(n-i)+'*';
        console.log("*".repeat(i))
    }
    for(var i=n-1; i>0; i--){
        console.log("*".repeat(i))
    }
}

function rombo(n) {
    for (var i = 0; i < n; i++) {
      var cadena = '';
      for (var j = 0; j < n; j++) {
        cadena = cadena+ ' ';
      }

      for (var k = 1; k <= (2*i+1); k++) {
        cadena = cadena + '*';
      }
      console.log(cadena);
    }
    for (var i = n; i > 0; i--) {
        var cadena = '';
        for (var j = n+1; j > 1; j--) {
          cadena = cadena+ ' ';
        }
  
        for (var k = (2*i-1); k >= 1; k--) {
          cadena = cadena + '*';
        }
        console.log(cadena);
      }
  }


  document.getElementsByTagName("etiqueta")[0].inerText = "hola mundo"
  document.getElementsByTagName("etiqueta").length
  document.getElementsByTagName("etiqueta")