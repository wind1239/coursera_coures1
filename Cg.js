
var Clist = ["black" , "blue" , "brown" , "green" , "orange" , "pink" , "purple" , "red" , "white" ,"yellow"  ];
var random_guess;           
var user_input;        
var finished = false;   
var guesses = 0;


function do_game()
 {
    var random_number = Math.random() * 10;
    var random_number_integer = Math.floor(random_number);
    random_guess = Clist [random_number_integer];
	
	
	 alert("the color is ."+ random_guess);
    while (!finished) {
    	
       user_input = prompt("I am thinking of a Color from this list :- "+
                                  "black, blue, brown, green, orange, pink, purple, red, white , yellow.\n\n"+
                                  "What is the Color?");
        
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() 
{
    if (!(isNaN(user_input))) 
    	{
        alert("You have entered a number.\n\n" +
              "Please enter a color.");
        return false;
   		 }
    
    switch(user_input) {
    		case "black":
    		break;
    		case "blue":
    		break;
    		case "brown":
    		break;
    		case "green":
    		break;
    		case "orange":
    		break;
    		case "pink":
    		break;
			case "red":
    		break;
    		case "yellow":
    		break;
    		case "white":
    		break;
    		case "purple":
    		break;
			default:
			alert("I don't recognize this color .");
			return false;
		}
		

    if (user_input > random_guess) 
		{
        alert("your color is alphabetically higher");
			return false;
		}
    else 

    if (user_input < random_guess) 
	  {
        alert("your color is alphabetically lower");
      return false;
     }
     
    
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background=random_guess;

    alert("You got it! The color was " + random_guess + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the color!");
       
         
    return true;   
}