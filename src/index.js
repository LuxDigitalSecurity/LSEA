import CryptoJS from "https://cdn.jsdelivr.net/npm/crypto-es/lib/index.js"
import JSONDict from "./jsondict.js"
    var LSEA = {}
      
    LSEA.Encrypt = function(string, key) {
    
        
    function genhex() {
        function genhexpart() {
    var length;
    length = 1;
    var result           = [];
    var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   var hexletter;
   var hexnumber;
   var hexpart;
   hexletter = result.join('');
   hexnumber = Math.floor(Math.random() * (10 - 1) + 1)
   hexpart = `${hexletter}${hexnumber}`
   return hexpart
        }
        var hex = "";
        for (var i = 0; i < 26; i++) {
            if (i === 25) {
             hex += `${genhexpart()}`
            } else {
             hex += `${genhexpart()}:`
            }
        }
        return hex;
}
   var Hex = genhex();
   
        return JSONDict.toString();
    }
    
    export default LSEA
       //var encrypted = LSEA.Encrypt("hello", "mysecretkey")
   
    
    //var decrypted = LSEA.Decrypt(encrypted, "key_213")
       
    /*
    function makeid2(length) {
    var result           = [];
    var characters       = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+";
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}
*/
    
       //console.log(CryptoJS)
