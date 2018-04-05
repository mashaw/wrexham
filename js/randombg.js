var classes = ['img1','img2','img3','img4']; //add as many classes as u want
var randomnumber = Math.floor(Math.random()*classes.length);



(function($) {
    // This jQuery function is called when the document is ready

//$('body').addClass(classes[randomnumber]);
$('header').toggleClass('randomnumber');
document.write("87654567");

    });
  })(jQuery);
