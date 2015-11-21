// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
//= require select2


search = function(term, text){
    //default search of select2: directly get the word anywhere from the names
    if(text.toUpperCase().indexOf(term.toUpperCase())>=0)
	return true;

    //regular expression for any non-alphabet character
    var p = /[^a-zA-Z]+/;

    //splitting word on the basis of non alphabet character
    var term_list = term.split(p);

    //remove all the non-character words from the list
    for(var i=0;i<term_list.length;i++){
	if(p.test(term_list[i]) || term_list[i]=="")
	    term_list.splice(i,1);
    }

    //if the is only one word in the list. Splitting it into words
    if(term_list.length == 1)
	term_list = term_list[0].split("");

    //removing any space or unwanted character from the list
    for(var i=0;i<term_list.length;i++){
	if(p.test(term_list[i]) || term_list[i]=="")
	    term_list.splice(i,1);
    }

    //splitting the name to compare. on the basis of special characters
    var text_list = text.split(p);
    var term_index, text_index;

    //taking the term and text index values as 0 for the algorithm
    term_index = 0;
    text_index = 0;

    //starting of the comparision algorithm
    //the program terminates when the index of term or text becomes equal to the respective length
    while(term_index<term_list.length && text_index<text_list.length){

	//if the any element in the term list is empty then just continue
	// if(term_list[term_index]==""){
	//   term_index++;
	//   continue;
	// }
	//pattern to take the first letter of the word starting with the element of term
	var pattern = new RegExp("^"+term_list[term_index].toUpperCase());

	if(term_list[term_index].length>1)
	    pattern = new RegExp(term_list[term_index].toUpperCase());
	//if the mattern matches increment the index of term and text by 1
	if(pattern.test(text_list[text_index].toUpperCase())){
	    term_index++;
	    text_index++;
	}
	else//if pattern doesn't match increase the index of text_index only to check the next word
	    text_index++;
    }
    //if all the tokens or words in the word is checked return true or false
    if(term_index==term_list.length)
	return true;
    return false;

}
