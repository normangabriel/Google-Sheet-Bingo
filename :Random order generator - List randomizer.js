//Random order generator - List randomizer 
//assign a random number to each person with no duplicating numbers 

// function assign(arr) {
//   var maps = {};
//   arr.forEach(function(person) {
//     var num = Math.ceil(Math.random() * arr.length);
//     var test = true;
//     while (test) {
//       if (!(num in maps)) {
//         maps[num] = person;
//         test = false;
//       } else {
//         num = Math.ceil(Math.random() * arr.length);
//       }
//     }
//   });
//   return maps;
// }
// assign(people);

//assign random number to person cannot duplicate

var people = ["B1", "B2", "B3", "B4", "B5", "B6","B7","B8","B9","B10","B11","B12","B13","B14","B15","B16","B17","B18","B19","B20","I21","I22","I23","I24","I25","I26","I27","I28","I29","I30","I31","I32","I33","I34","I35","I36","I37","I38","I39","I40","N41","N42","N43","N44","N45","N46","N47","N48","N49","N50","N51","N52","N53","N54","N55","N56","N57","N58","N59","N60","G61","G62","G63","G64","G65","G66","G67","G68","G69","G70","G71","G72","G73","G74","G75","G76","G77","G78","G79","G80","O81","O82","O83","O84","O85","O86","O87","O88","O89","O90","O91","O92","O93","O94","O95","O96","O97","O98","O99"];
function assign(arr) {
  var output = [];
  arr.forEach(function(person) {
    var test = true;
    while (test) {
      var num = Math.floor(Math.random() * arr.length);   //new technique 8/17
      if (output[num] === undefined) {
        output[num] = person;
        test = false;
      } 
    }
  });
  return output;
}
assign(people);

// function randomGen(arr) {
// 	var map = {};
// 	for (var i = 0; i < arr.length; i++) {
// 		var position = Math.floor(Math.random() * arr.length);
// 		if (!(position in map)) {
// 			map[position] = arr[i];
// 		} 
// 		else {
// 			while (map.hasOwnProperty(position)) {
// 				position = Math.floor(Math.random() * arr.length);
// 			}
// 			map[position] = arr[i];
// 		}
// 	} return map; 
// }

randomGen(people);

function randomGen(arr) {
	var output = [];
	for (var i = 0; i < arr.length; i++) {
		var position = Math.floor(Math.random() * arr.length);
		if (output[position] === undefined) {
			output[position] = arr[i];
		} 
		else {
			while (output.hasOwnProperty(position)) {
				position = Math.floor(Math.random() * arr.length); ////test position, changes here then goes back
			} 												 //up to test again, then changes in body in false
			output[position] = arr[i];
		}
	} return output; 
}  //updated 9/8

//hasOwnProperty also works on arrays, checking to see if index position is occupied/true
