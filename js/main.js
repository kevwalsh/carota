$(document).ready(function() {
  // var rsvp = false; //keeps track of whether the rsvp box is filled out
  var rsvp = $('#rsvp input:radio[name=rsvp]');
  var name = $('#rsvp input[name="name"]');
  var email = $('#rsvp input[name="email"]');
  var camping = $('#rsvp input[name="camping"]');
  var anythingelse = $('#rsvp input[name="anythingelse"]');
  var all=name.add(email).add(anythingelse).add(camping); //shortcut for all wrapper elements
  all.addClass('hidden'); //hide everything and reveal as needed

  rsvp.change(function(){ //when the RSVP radio button changes
  		var value=this.value;

  		if (value == 'yes') {
        name.removeClass('hidden'); //show name
        email.removeClass('hidden'); //show email
        anythingelse.removeClass('hidden'); //show anythingelse
        camping.removeClass('hidden'); //show camping
  		}
  		else if (value == 'no') {
        name.removeClass('hidden'); //show name
        email.removeClass('hidden'); //show email
        anythingelse.removeClass('hidden'); //show anythingelse
        camping.addClass('hidden'); //show camping

      }
  	});
});