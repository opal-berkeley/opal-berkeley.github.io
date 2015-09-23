window.fbAsyncInit = function() {
    FB.init({
      appId      : '1609993662593945',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.4'
    });
    if (typeof facebookInit == 'function') {
      facebookInit();
    }
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function facebookInit() {
    FB.getAuthResponse(function(response) {
        if (response.authResponse) {
            $('#AccessToken').val(response.authResponse.accessToken);
        } else {
            console.log('no access token');
            // do something...maybe show a login prompt
        }
    });
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            $('#AccessToken').val(response.authResponse.accessToken);
        } else {
            console.log('no access token');
            // do something...maybe show a login prompt
        }
    });
    FB.api(
    '/1389844344611895/feed',
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        document.getElementById('fb-test').innerHTML = response;
      } else {
        document.getElementById('fb-test').innerHTML = "Did not work";
      }
    }
    );
}
