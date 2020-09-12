window.fbAsyncInit = function() {
let token =  getFbToken() ;
  FB.init({
    appId            : token,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v7.0'
  });
};

async function getFbToken() {
let response = await fetch('http://localhost:3000/token/getFbToken').then(promise=> {
  return promise.json();
}).then(jsonObject =>{
  return jsonObject.data;
});
return response;
}
