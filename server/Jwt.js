 let jwt = require('jsonwebtoken');
 let fs = require('fs');
 let privateKey = fs.readFileSync('./key/private.key');
 let publicKey = fs.readFileSync('./key/public.key');


 class Jwt {
   constructor(data){
    this.data = data;
   }
   getToken(){
     let data = this.data;
     let ctime = Math.floor(new Date() / 1000);
     let token = jwt.sign({
       ...data,
       exp: ctime  +  60 * 60 * 24 * 7
     }, privateKey, {algorithm: 'RS256'});
     return token;
   }
   verifyToken(){
     let token = this.data;
     try {
       console.log('--------')
      let result =  jwt.verify(token, publicKey, {algorithm: 'RS256'}) || {};
      console.log('sdfasdf')
      let exp = result.exp,
          time = new Date() / 1000;
      if(time < exp){
        return result
      }
     } catch (error) {
       return 'error'
     }
   }
 }

 module.exports = Jwt

// var j = new Jwt({id: '1511240134', admin: true});
// let token = j.getToken()
// console.log(token)
// setTimeout(() => {
//   var b = new Jwt(token)
// console.log( b.verifyToken())
// }, 2000);

// var b = new Jwt('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImV4cCI6MTU1NTkxNjczNCwiaWF0IjoxNTU1MzExOTM0fQ.AyFHO3J2FPbOBgRkqhSLq0nIW0mFq7LU90epz7F7v40uCgpALZeSTQ5cH3peWLzjW531wrBlnB-7opzgXFJQ3qjYDjOMcbEsjGSRaGPjdZusMg7JcxoDZhBlrcK9fTHOXlCjxKYElfCxEEsVQN1X5Ro61cghLyb0eLKHh9Rnv0CCWI-Et_yaeAJxMR_P813Ha1P-dGnlUeUxCVQf8C7Lg35kF9JJKCZlV-zX0MdnGSHTa4ezoY-xq1zXcv4u81kdMYTTVztPPJWthsLmKGcwl3wAvM_uBl6Nn7wXj1mSW5jtuZAdW0W52GP7zzXjOJJcXYO_ICFYpRWP4G5HRvMpZA');
// console.log(b.verifyToken())
