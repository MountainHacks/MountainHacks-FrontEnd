var ambiantMessage = function ( msg ) {
  $.ambiance({
    message: msg ,
    type: "error",
    fade: true
  });
}

if (!String.prototype.contains) {
    String.prototype.contains = function( s, i ) {
        return this.indexOf(s, i) != -1;
    }
}

// dummy test data
// $("#form input[name='first_name']").val("test");
// $("#form input[name='last_name']").val("test");
// $("#form input[name='email']").val("test@test.edu");
// $("#typehead-schools").val("test");
// $("#form input[name='major']").val("test");
// $("#form input[name='github']").val("test");

$("#formSubmit").click( function( e ) {

  e.preventDefault();

  var form = new FormData();
  
  var firstName =  $( "#form input[name='first_name']" ).val();
  var lastName =   $( "#form input[name='last_name']" ).val();
  var email =      $( "#typehead-schools" ).val();
  var school =     $( "#form input[name='major']" ).val();
  var major =      $( "#grade option:selected" ).val();
  var grade =      $( "#grade option:selected" ).val();
  var gender =     $( "#gender").children( ".active" ).text().charAt( 0 ).toString();
  var shirt =      $( "#shirt").children( ".active" ).text();
  var outOfState = $( "#outOfState" ).children( ".active" ).text();
  var github =     $( "#form input[name='github']" ).val();
  var linkedIn =   $( "#form input[name='linkedin']" ).val();
  var first =      $( "#first" ).children( ".active" ).text();

  // form validation
  if(firstName == "") {
    ambiantMessage( "Please enter your first name." );
    return;
  }

  if(lastName == "") {
    ambiantMessage( "Please enter your last name." );
    return;
  }

  if(email == "") {
    ambiantMessage( "Please enter your email." );
    return;
  }

  if(!String(email).contains(".edu") && 
     grade != "High School") {
    ambiantMessage( "Please enter your .edu email." );
    return;
  }

  if(school == "") {
    ambiantMessage( "Please enter your school." );
    return;
  }

  if(major == "") {
    ambiantMessage( "Please enter your major." );
    return;
  }

  if(grade == "") {
    ambiantMessage( "Please enter your grade." );
    return;
  }

  if(gender == "") {
    ambiantMessage( "Please enter your gender." );
    return;
  }

  if(shirt == "") {
    ambiantMessage( "Please enter your shirt size." );
    return;
  }

  if(outOfState == "") {
    ambiantMessage( "Please indicate if you are out-of-state." );
    return;
  }

  if(linkedin !== "" && !datablob.linkedin.toString().contains("https://www.")) {
    ambiantMessage( "Please enter proper URL for LinkedIn. (Start with https://www.)");
    return;
  }
  
  if(first == "") {
    ambiantMessage( "Please indicate if you are a first-time hacker." );
    return;
  }

  form.append( 'first_name', firstName);
  form.append( 'last_name', lastName);
  form.append( 'email', email);
  form.append( 'school', school);
  form.append( 'major', major);
  form.append( 'grade', grade);
  form.append( 'gender', gender);
  form.append( 'shirt', shirt);
  form.append( 'out_of_state', outOfState);
  form.append( 'github', github);
  form.append( 'linkedin', linkedIn);
  form.append( 'first', first);
  form.append('resume', $( '#resumebecausegregissofrigginlameswaggy' )[0].files[0] );
  
  $('#cog-load').css({'display':'inline-block'});
  $('#formSubmit a').off();
  $('#formSubmit a').val("working...");

  var request = new XMLHttpRequest();
  request.open( 'GET', 'http://localhost:8000/token', false );
  request.send( null );
  var token = request.responseText;

  $.ajax({
    url: "http://localhost:8000/submit",
    type: "POST",
    data: form,
    processData: false,
    contentType: false,
    beforeSend: function ( request ) {
     request.setRequestHeader( "X-MOUNTAINHACKS", token );
    },
    success: function( data ) {
      $.ambiance({
        message: "Thanks for registering!",
        title: "Success!",
        type: "success"
      });
      $( "#form" ).trigger( "reset" );
      $( '.btn-group button').removeClass( 'active' );
      $( '#formSubmit a' ).on();
      $( '#formSubmit a' ).val( "click me babeh!" );
      $( '#cog-load' ).css({'display':'none'});
    },
    error: function ( jXHR, textStatus, errorThrown ) {
      $.ambiance({
        message: "There was a problem submitting your data yo",
        type: "error",
        fade: true
      });
      $( '#cog-load' ).css({'display':'none'});
    }
  })
});