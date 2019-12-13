$(document).ready(function () {
  $(function () {
    var availableTags = [
      "haut",
      "bas",
      "robes",
      "chaussures",
      "sport",
      "sous-vetement",
      "accessoires",
      "pyjamas",
    ];
    $("#tags").autocomplete({
      source: availableTags
    })
  });
  // mega menu
  (function () {
    $('#booNavigation').booNavigation({
      slideSpeed: 600,
      fadeSpeed: 200,
      delay: 500
    });

  });

  // (function () {

  /**
   * This is the call we have to do to execute
   * the plugin giving a custom params
   */
  // // $('#booNavigation').booNavigation({
  //     slideSpeed: 400
  // });

  // })();



  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  });


  // boutton accordeon
  $(function () {
    $("#accordion").accordion();
    $("#accordion_com").accordion();
  });

  // -----------fonction formulaire contact

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var x = re.test(String(email).toLowerCase());
    return x;
  }

  $("#ROsymbolmail").change(function () {
    let x = $("#ROsymbolmail").val();
    let estEmailValide = validateEmail(x);

    if (estEmailValide) {
      alert("Success");
    } else {
      alert("Non Success");
    }
  });
  $("#name").change(function () {
    var x = $('#name');
    $(x).css("backgroundColor", "black");
  });


// ------------------------------------------------------------------------------------------------------

  

  // ------------------ script pour filtre category
   $('.ROhommeHaut').hide();
    $(".ROfemmehaut").hide();
    $(".ROfemmebas").hide();
    $(".ROenfanthaut").hide();
    $(".ROenfantbas").hide();


  // filtres
  
  $('.ROfiltrehomme').on("change", function () {
    console.log('test')
    if ($(this).is(":checked")) {
        $(".ROhommeHaut").show();
    } else {
      $(".ROhommeHaut").hide();
    }
  });
  // femme
  $('.ROfiltrefemme').on("change", function () {
    console.log('test')
    if ($(this).is(":checked")) {
      $(".ROfemmehaut").show();
      $(".ROfemmebas").show();
    } else {
      $(".ROfemmehaut").hide();
      $(".ROfemmebas").hide();
    }
  });
  $(".ROfiltrefemme  .typeFemme .typeRobe").on("change",function(){
    
  // if($('.typeHaut').is(":checked")){
  //   $(".imageHautFemme").show();
  // }if ($(".typeBas").is(":checked")){;
  //   $(".imageBasFemme").show();
  // }
  if ($(".typeRobe").is(":checked")){
    $(".imageRobeFemme").show();
  }
});


  // enfant
$('.ROenfantfiltre').on('change',function() {
  if($(this).is(":checked")){
    $(".ROenfanthaut").show();
    $(".ROenfantbas").show();
  }else{
    $(".ROenfanthaut").hide();
    $(".ROenfantbas").hide();
  }
});



// };


  // -------------------script pour product
  // cacher l a div description longue
  $(".ROdivSecret").css({ visibility: "hidden" });
  jQuery(function () {
    let a = $(".ROdivSecret");
    let b = $(".ROdeb");
    b.click(function () {
      a.css({ visibility: "visible" });
    });
  });
  // ----les recuperations pour cart-----------------
  
  
  function monpanier() {

    let sum =0;
    $('.pta').each(function(){
      $(this).text(sum);
    });

    
    $("select").on("change", function () {
     let nbProduit= $(this).val();
     let prixProduit= $(this).parent().parent().parent().children().find(".prix").html();
     let sousTotal;
    //  recuperation du prix unitaire on remonte avec parent() on desend avec enfant a la bonne ligne trouve la class
    // produit
    sousTotal=prixProduit*nbProduit;
    sousTotal=$(this).parent().parent().parent().children().find(".pta").text(sousTotal);
    


  $('.pta').each(function() {
     sum = parseInt( sum ) + parseInt(($(this).text()));
    
     console.log(sum);
 });
 $(".lasum").text(sum);
//  $(this).parent().parent().parent().parent().children().find(".lasum").text(sum) ;
    
    
    });
};
monpanier();
// -----------------------------------fin de panier












});