// quotes are stored in an array of objects
var quotes = [{ "id": 1,
  "attrib": "Steve Jobs",
  "quote": "Design is not just what it looks like and feels like. Design is how it works."
}, { "id": 2,
  "attrib": "Steve Jobs",
  "quote": "Innovation distinguishes between a leader and a follower."
}, { "id": 3,
  "attrib": "Albert Einstein",
  "quote": "Reality is merely an illusion, albeit a very persistent one."
}, { "id": 4,
  "attrib": "Albert Einstein",
  "quote": "If you can't explain it simply, you don't understand it well enough."
}, { "id": 5,
  "attrib": "Albert Einstein",
  "quote": "Strive not to be a success, but rather to be of value."
}, { "id": 6,
  "attrib": "Steve Jobs",
  "quote": "Your time is limited, so don’t waste it living someone else’s life."
}, { "id": 7,
  "attrib": "Bill Gates",
  "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
}, { "id": 8,
  "attrib": "Albert Einstein",
  "quote": "Science without religion is lame, religion without science is blind."
}, { "id": 9,
  "attrib": "Henry Ford",
  "quote": "Whether you think you can or you think you can’t, you’re right."
}, { "id": 10,
   "attrib":"Kevin Kruse",
   "quote":"Life isn’t about getting and having, it’s about giving and being."
}, { "id": 11,
   "attrib":"Napoleon Hill",
   "quote":"Whatever the mind of man can conceive and believe, it can achieve."
}, { "id": 12,
   "attrib":"Albert Einstein",
   "quote":"Strive not to be a success, but rather to be of value."
}, { "id": 13,
   "attrib":"Robert Frost",
   "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."
}, { "id": 14,
   "attrib":"Florence Nightingale",
   "quote":"I attribute my success to this: I never gave or took any excuse."
}, { "id": 15,
   "attrib":"Wayne Gretzky",
   "quote":"You miss 100% of the shots you don’t take."
}, { "id": 16,
   "attrib":"Michael Jordan",
   "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."
}, { "id": 17,
	"attrib":"Amelia Earhart",
	"quote":"The most difficult thing is the decision to act, the rest is merely tenacity."
}];

// function to load and display a new quote
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// wait for page load before displaying content
document.addEventListener("DOMContentLoaded",function() {
	var k=0,incr =0, generatedID=[],shuffledID=[];
	for(i=0; i<quotes.length; i++){
		generatedID[i]=i;
	}
	shuffledID = shuffleArray(generatedID);
  
	function incre(){
	k=shuffledID[incr];
    	console.log(k,incr); 
    	incr+=1;
	if(incr > quotes.length)
      	{	
	 confirm("Thoughts are done for the day");
      	 document.getElementById("generateButton").style.display = 'none';
	}
	else
	 newQuote(k);	
	}
	
	function newQuote(e) {
		 document.getElementById("id").innerHTML=quotes[e].id; //for showing randomness
  		 document.getElementById("quote").innerHTML= quotes[e].quote;
  		 document.getElementById("attrib").innerHTML= quotes[e].attrib;
	}
  	// retrieve a new quote when the button is clicked
  	document.getElementById("generateButton").onclick = function() {
    		incre();
  	};
});
