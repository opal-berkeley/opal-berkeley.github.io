/**
 * Custom js for parsing OPAL page events 
 * by Michael Lin
 */

/**
FB.login(function(){
 FB.api('/me/feed', 'post', {message: 'Hello, world!'});
}, {scope: 'publish_actions'});
*/

FB.api(
    '/1389844344611895/feed',
    {
        'filter': 'nf'
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
        console.log(response);
      }
    }
);
