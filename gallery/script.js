//need this to deactivate lightbox on small screens
$(document).ready(function () {
  
  $('header').css('opacity', 1);
  $('body').css('opacity', 1);
  lightboxOnResize();
 
});

$(window).resize(function() {
  lightboxOnResize();

});

//***ISOTOPE***
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



/*
$('#filters a').on("click", function(){
  var selector = $(this).attr('data-filter'); 
  $('#container').isotope({ filter: selector }, function(){
    if(selector == "*"){
     $(".fancybox").attr("data-fancybox-group", "gallery");
    } else{ 
     $(selector).find(".fancybox").attr("data-fancybox-group", selector);
    }
  });
  return false;
});
*/



// change is-checked class on buttons
$('.btn-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

//***LIGHTBOX***
//https://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/documentation
// $(document).delegate('a[rel="prettyPhoto[portfolio]"]', 'click', function(event) {
//     event.preventDefault();
//     $(this).prettyPhoto({
//       theme: "light_square",
//     });
// }); 

function lightboxOnResize() {
  
//   if ($(window).width() < 768) {
       
//         $('a[rel="prettyPhoto[portfolio]"]')
//             .removeAttr('rel')
//             .addClass('lightboxRemoved');
      
//  $('a.lightboxRemoved').click(function( event ) {
//         event.preventDefault();
//    console.log("test");
//       });
//      // $("a[rel='prettyPhoto[portfolio]']").unbind('click');
    
//     } else {
        
//        $('a.lightboxRemoved').attr('rel', 'prettyPhoto[portfolio]').removeClass("lightboxRemoved");
//        $("a[rel='prettyPhoto[portfolio]']").prettyPhoto({
//          theme: "light_square",
//        });
        
//     }
}

/* ---- our work gallery ---- */
$('#galleryx').magnificPopup({
  delegate: 'a.zoom',
  type: 'image',
  fixedContentPos: false,
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
      enabled: true,
      preload: [0,2]
  }
});

/* ---- popup image ---- */
$('.popup-img').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});

/* ---- nav main link hover dropdown ---- */
if ( $(window).width() >= 767) {
  $('.dropdown').hover(function(){
      $('.dropdown-toggle', this).trigger('click');
  });
}

/* ---- navbar adjust on scroll ---- */
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 70) {
      $('.navbar').addClass('navbar-switch')
  } else {
      $('.navbar').removeClass('navbar-switch')
  }
});
