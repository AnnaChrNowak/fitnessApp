var addNewRow = $("#adding_button");
var myTable = $(".table");
var myRow = '<tr><th scope="row"><input class="form-control my_form" placeholder="DD-MM-RRRR" type="number"></th><td><input class="form-control my_form" placeholder="Weight in kg" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td><td><input class="form-control my_form" placeholder="Size in cm" type="number"></td></tr>'

$("#adding_button").click(function() {
  $(".table").find('tbody').find('.summary').before(myRow)
})
