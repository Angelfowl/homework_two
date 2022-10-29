
    function changeRoute() {
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#", "");
        console.log(hashTag + " " + pageID);
    
        if (pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
        });
    
    }else {
        $.get(`pages/home/home.html`, function(data){
            // console.log("data " + data);
            $("#app").html(data);
        });
    }
    };



function initListeners() {

    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });


}





$(document).ready(function(){
    initListeners();
})