   //ipStack API url 
   var ipUrl = "http://api.ipstack.com/check?access_key=8055339b7e1902b5583fe7b534566309";
    //run requester ip lookup

    function ipRequest() { 
        console.log(ipRequest);
        fetch(ipUrl) 
        .then(function(response) {
            console.log(response.json());
            return response.json();
        })
        .catch(function() {
        });

    false;
    );

    )

    };

$ (document).ready(function(){
$().load(ipRequest)(){}

});
