// Write two functions to chain together. The first function, makeAllCaps, will take in an array of words and capitalize them. A second function, sortWords, will sort the words in alphabetical order. 

// If the array contains anything besides a single word (string), an error should be thrown

var array = ['ice cream', 'cookie dough', 'caramel']
var array2 = ['dessert', 44, true]

function makeAllCaps(array){
	return new Promise((resolve, reject)=> {
		let capsArray = array.map(word =>{
			if (typeof word === 'string'){
				return word.toUpperCase()
			}else {
				reject ('Error: Not all items in the array are strings!')
			}
		})
	resolve(capsArray)
	})
}

function sortWords(array){
	return new Promise((resolve,reject) =>{
		if (array){
			array.forEach((el))=> {
				if (typeof el != 'string') {
					
				}
			}
		}
	}
}

	}
}