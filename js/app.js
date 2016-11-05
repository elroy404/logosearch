$(function(){
  var programSelection, educationSelection = "";

  var menu = {
    programSelection: "Program Type",
    educationSelection: "Education Level"
  };

  var toggle = {
    aci: {
      fade: "<img src=\"images/aci-fade.png\" alt=\"aci-fade\" class=\"program scholarship bogo aci-fade\">",
      color: "<img src=\"images/aci-color.png\" alt=\"aci-color\" class=\"program scholarship bogo aci-color\">"
    },
    afe: {
      fade: "<img src=\"images/afe-fade.png\" alt=\"afe-fade\" class=\"education kinder bogo\">",
      color: "<img src=\"images/afe-color.png\" alt=\"afe-color\" class=\"education kinder aci-color\">"

    },
    acm: {
      fade: "<img src=\"images/acm-fade.png\" alt=\"acm-fade\" class=\"education high program loan bogo\">",
      color: "<img src=\"images/acm-fade.png\" alt=\"acm-fade\" class=\"education high program loan bogo\">"
    }
  }

  $("#program-type-menu li").on('click',function(){
    menu.programSelection = $(this).text();
    displaySelection();
  });

  $("#education-level-menu li").on('click',function(){
    menu.educationSelection = $(this).text();
    displaySelection();
  });

  $("#search-button").on('click','button',function(){
    console.log(menu.programSelection);
    console.log(menu.educationSelection);
    defaultSelection();
  });

  function displaySelection(){
    $("#program-type-menu").append();
    $("#program-type-button").text(menu.programSelection);
    $("#education-level-menu").append();
    $("#education-level-button").text(menu.educationSelection);
  }

  function defaultSelection(){
    if(menu.educationSelection == "Education Level"){
      
      $(".education[data-img='afe']").attr('src','images/afe-color.png');
      console.log($(".education[data-img='afe']").html(this));
    }
    else{
      $(".education").attr("src","images/afe-fade.png");
    }

  }
});
