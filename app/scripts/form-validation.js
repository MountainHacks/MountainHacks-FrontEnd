var ambiantMessage = function ( msg ) {
  $.ambiance({
    message: msg ,
    type: "error",
    fade: true
  });
}

if (!String.prototype.contains) {
    String.prototype.contains = function(s, i) {
        return this.indexOf(s, i) != -1;
    }
}

$("#formSubmit").click( function( e ) {

  e.preventDefault();
  var datablob = {};
  datablob.first_name = $("#form input[name='first_name']").val();
  datablob.last_name = $("#form input[name='last_name']").val();
  datablob.email = $("#form input[name='email']").val();
  datablob.school = $("#form input[name='school']").val();
  datablob.major = $("#form input[name='major']").val();
  datablob.grade = $("#grade option:selected").val();
  datablob.gender = $("#gender").children(".active").text();
  datablob.shirt = $("#shirt").children(".active").text();
  datablob.out_of_state = $("#outOfState").children(".active").text();
  datablob.github = $("#form input[name='github']").val();
  datablob.linkedin = $("#form input[name='linkedin']").val();
  datablob.first = $("#first").children(".active").text();

  // form validation
  if(datablob.first_name == "") { 
    ambiantMessage( "Please enter your first name." );
    return;
  }

  if(datablob.last_name == "") {
    ambiantMessage( "Please enter your last name." );
    return;
  }

  if(datablob.email == "") {
    ambiantMessage( "Please enter your email." );
    return;
  }

  if(!String(datablob.email).contains(".edu") && 
  	 datablob.grade != "High School") {
    ambiantMessage( "Please enter your .edu email." );
    return;
  }

  if(datablob.school == "") {
    ambiantMessage( "Please enter your school." );
    return;
  }

  if(datablob.major == "") {
    ambiantMessage( "Please enter your major." );
    return;
  }

  if(datablob.grade == "") {
    ambiantMessage( "Please enter your grade." );
    return;
  }

  if(datablob.gender == "") {
    ambiantMessage( "Please enter your gender." );
    return;
  }

  if(datablob.shirt == "") {
    ambiantMessage( "Please enter your shirt size." );
    return;
  }

  if(datablob.out_of_state == "") {
    ambiantMessage( "Please indicate if you are out-of-state." );
    return;
  }
  
  if(datablob.first == "") {
    ambiantMessage( "Please indicate if you are a first-time hacker." );
    return;
  }

  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.mountainhacks.com/token', false);
  request.send(null);
  var token = request.responseText;

  $.ajax({
    url: "http://api.mountainhacks.com/submit",
    type: "POST",
    data: datablob,
    beforeSend: function (request) {
     request.setRequestHeader("X-MOUNTAINHACKS", token);
    },
    success: function( data ) {
      $.ambiance({
        message: "Thanks for registering!",
        title: "Success!",
        type: "success"
      });
      $("#form").trigger("reset");
      $('.btn-group button').click(function() {
        $(this).parent().children().removeClass('active');
      });
    },
    error: function ( jXHR, textStatus, errorThrown ) {
      $.ambiance({
        message: "There was a problem submitting your data yo",
        type: "error",
        fade: true
      });
    }
  })
});