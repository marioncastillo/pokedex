$(document).ready(function($){
	$.ajax({
		url:'http://pokeapi.co/api/v2/pokemon',
		type:'GET',
		datatype:'json',
		data:{
			limit:'719',
		},
	})
})