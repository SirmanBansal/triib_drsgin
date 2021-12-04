  $(document).ready(function(){
    
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

  })

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
  if(validateEmail(email.value)){
    text.innerText="Valid email";
  }else{
    text.innerText="Please enter a valid address";
  }
});


$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

// pricing
$('#ans1slide1').slideDown();
$('#slideit1').slideDown();
$('.ques1 h4:first').addClass('active');
$('.ques2 h4:first').addClass('active');

$('.ques1 h4').click(function(event){
  $('.ques1 h4').removeClass('active');/////// remove active class from all
  index = $(this).index();
  $(this).addClass('active'); ////////////active class add in h4 so content will be chhange
  if (index==0) {
    $('#ans1slide1').slideDown();
    $('#ans1slide2').slideUp();
    $('#ans1slide3').slideUp();
  }
  if(index == 2) {
    $('#ans1slide2').slideDown();
    $('#ans1slide1').slideUp();
    $('#ans1slide3').slideUp();
  }
  if(index == 4) {
    $('#ans1slide3').slideDown();
    $('#ans1slide1').slideUp();
    $('#ans1slide2').slideUp();
  }
});
$('.ques2 h4').click(function(event){
  $('.ques2 h4').removeClass('active');/////// remove active class from all
  index = $(this).index();
  $(this).addClass('active'); ////////////active class add in h4 so content will be chhange
  if (index==0) {
    $('#slideit1').slideDown();
    $('#slideit2').slideUp();
    $('#slideit3').slideUp();
  }
  if(index == 2) {
    $('#slideit2').slideDown();
    $('#slideit1').slideUp();
    $('#slideit3').slideUp();
  }
  if(index == 4) {
    $('#slideit3').slideDown();
    $('#slideit1').slideUp();
    $('#slideit2').slideUp();
  }
});

$('.toggleicon').click(function(event){
  var x=document.getElementById("resmenu");
  if(x.style.display == "block"){
    x.style.display = "none";
  }else{
    x.style.display = "block";
  }
});