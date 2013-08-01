/*  Javascript file for College of the Canyons: CMPSCI-190 
 *  Javascript Programming. This file contains all of the javascript for
 *  the lab assignments.
 */

/*----------- Global Variables ---------------------*/

myName = "Patrick Stephens";
classDescription = "Computer Science 190  Web Programming: Javascript";
theDate = new Date();
theDate = theDate.toDateString();
currentspecial = 1     // selects which item that is "on special"
customertype = "direct";
companyName = "Booktopia";
addDisplayed = 1;
popAd = 1;
popOpen = false;

/*-------------- Lab Assignments 14 - 15 -----------*/

function buildForm()
{

	var html = '<script type="text/javascript" src="student.js"></script>';
	html += "<FORM onSubmit='return checkForm()' action='http://www.college1.com/cgi-bin/classes/javascript/survey.cgi' NAME='customerform'>";
	html += "<TABLE WIDTH=100% BORDER=1>";
	html += "<TR><TD>First Name: <INPUT TYPE='TEXT' NAME='firstname'></TD>";
	html += "<TD ALIGN=RIGHT> Last Name: <INPUT TYPE='TEXT' NAME='lastname'></TD></TR>";
	html += "<TR><TD COLSPAN=2>Address: <INPUT TYPE='TEXT' NAME='address' size =50></TD></TR>";
	html += "<TR><TD>City: <INPUT TYPE='TEXT' NAME='city'></TD>";
	html += "<TD ALIGN=RIGHT>State: <INPUT TYPE='TEXT' NAME='state' size=3> Zip: <INPUT TYPE='TEXT' NAME='zip' size=6></TD>";
	html += "<TR><TD COLSPAN=2>Email Address: <INPUT TYPE='TEXT' NAME='emailaddr' size=50></TD></TR>";
	html += "<TR><TD>Payment Method: <SELECT NAME='cardtype'>";
	html += "<OPTION>Card Type";
	html += "<OPTION>MasterCard";
	html += "<OPTION>Visa";
	html += "<OPTION>Discover";
	html += "</SELECT>";
	html += "Expiration:";
	html += '<SELECT NAME="month">';
	html += "<OPTION>Month";
	html += "<OPTION>Jan";
	html += "<OPTION>Feb";
	html += "<OPTION>Mar";
	html += "<OPTION>Apr";
	html += "<OPTION>May";
	html += "<OPTION>Jun";
	html += "<OPTION>Jul";
	html += "<OPTION>Aug";
	html += "<OPTION>Sep";
	html += "<OPTION>Oct";
	html += "<OPTION>Nov";
	html += "<OPTION>Dec";
	html += "</SELECT>";
	html += '<SELECT NAME="year">';
	html += "<OPTION>Year";
	html += "<OPTION>2005";
	html += "<OPTION>2006";
	html += "<OPTION>2007";
	html += "<OPTION>2008";
	html += "<OPTION>2009";
	html += "</SELECT>";
	html += "</TD>";
	html += "<TD ALIGN=RIGHT>Card Number: <INPUT TYPE='TEXT' NAME='ccnumber'>";
	html += "</TD></TR>";
	html += "<TR><TD><INPUT TYPE='submit' value='Submit'></TD>";
	html += "<TD ALIGN=RIGHT><INPUT TYPE='reset'></TD></TR>";
	html += "</TABLE></FORM>";
	
	productarea.document.writeln(html);
	productarea.document.close();
}

function isEmail(email)
{
     indexSym = email.indexOf('@',0)
     dot = email.indexOf('.',indexSym)

     if ((indexSym <= -1) || (dot == -1) || (email.indexOf('.',indexSym) == (email.length-1) ))
     {
         return false;
     }
     else
     {
         return true;
     }
     
} // end of function isEmail
 
function checkForm()
{
     var errors = "";
     var submit = true;

     fname = document.customerform.firstname.value;

     if (fname.length < 1)
     {
          errors += "Please enter a first name." + '\n';
          submit = false;
     }

     lname = document.customerform.lastname.value;

     if (lname.length < 1)
     {
          errors += "Please enter a last name." + '\n';
          submit = false;
     }

     address = document.customerform.address.value;

     if (address.length < 1)
     {
          errors += "Please enter an address." + '\n';
          submit = false;
     }

     city = document.customerform.city.value;

     if (city.length < 1)
     {
          errors += "Please enter a city." + '\n';
          submit = false;
     }

     state = document.customerform.state.value;

     if (state.length < 2)
     {
          errors += "Please enter a state." + '\n';
          submit = false;
     }

     zip = document.customerform.zip.value;

     if ((zip.length < 5) || (isNaN(zip)))
     {
          errors += "Please enter a zip code." + '\n';
          submit = false;
     }

     email = document.customerform.emailaddr.value;

     if ((email.length < 2) || (!isEmail(email)))
     {
          errors += "Please enter a valid email address." + '\n';
          submit = false;
     }

//verifies that a credit card type has been entered
     cardtype = document.customerform.cardtype.value;

     if (cardtype == "Card Type")
     {
          errors += "Please enter a valid credit card type." + '\n';
          submit = false;
     }

//verify credit that a month has been entered
     month = document.customerform.month.value;

     if (month == "Month")
     {
          errors += "Please enter a valid month for your card expiration date." + '\n';
          submit = false;
     }

//verify that a year has been entered
     year = document.customerform.year.value;

     if (year == "Year")
     {
          errors += "Please enter a valid year for your card expiration date." + '\n';
          submit = false;
     }

//verify credit card number
     ccnum = document.customerform.ccnumber.value;

     if ((ccnum < 16) || (isNaN(ccnum)))
     {
          errors += "Please enter a valid credit card number." + '\n';
          submit = false;
     }

	if (submit == false)
	{
     	alert(errors);
     	return submit;
    }
    else
    {
    	return submit;
    }
} // end of function checkForm

/*---------- Lab Assignment 13 ------------*/

function popupAd()
{

     if (popAd == 1)
     {
          if (popOpen == true)
          {
               adThree.close();
          }

          adOne = open("", "adOne", "height=220, width=520");

          var html = '<link rel="stylesheet" href="booktopia_style.css" type="text/css">';
			html += "<link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>";
          	html += '<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=#DFDFCB style="margin: 10px; padding: 15px;">';
          	html += "<TR>";
          	html += '<TD><img src="treasureisland.jpg" style="height: 150px;"></TD>';
          	html += '<TD style="padding: 10px"><h2>Buy Treasure Island Now!</h2></TD>';
          	html += "</TR>";
          	html += "</TABLE>";
          	adOne.document.writeln(html);
          	adOne.document.close();
          	adOne.focus();
          	popAd++;

          popOpen = true;
     }
     else if (popAd == 2)
     {

          if (popOpen == true)
          {
               adOne.close();
          }

          adTwo = open("", "adOne", "height=220, width=520");

          var html = '<link rel="stylesheet" href="booktopia_style.css" type="text/css">';
			html += "<link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>";
          	html += '<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=#DFDFCB style="margin: 10px; padding: 15px;">';
          	html += "<TR>";
          	html += '<TD><img src="beautifulcreatures.jpg" style="height: 150px;"></TD>';
          	html += '<TD style="padding: 10px"><h2>Buy Beautiful Creatures Now!</h2></TD>';
          	html += "</TR>";
          	html += "</TABLE>";
          adTwo.document.writeln(html);
          adTwo.document.close();
          adTwo.focus();
          popAd++;
          

          popOpen = true;
     }
     else
     {
     
          if (popOpen == true)
          {
               adTwo.close();
          }

          adThree = open("", "adOne", "height=550,width=360");

          var html = '<link rel="stylesheet" href="booktopia_style.css" type="text/css">';
			html += "<link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>";
          	html += '<TABLE WIDTH=230 HEIGHT=530 BGCOLOR=#DFDFCB style="margin: 10px; padding: 15px; text-align: center;">';
          	html += "<TR>";
          	html += '<TD><img src="deathwatch.jpg" style="height: 150px;"></TD></TR>';
          	html += '<TR><TD style="padding: 10px"><h2>Buy Deathwatch Now!</h2></TD>';
          	html += "</TR>";
          	html += "</TABLE>";
          adThree.document.writeln(html);
          adThree.document.close();
          adThree.focus();
          popAd = 1;
          

          popOpen = true;
     }

} // end of function popupAd

/*---------- Lab Assignment 11 ------------*/

function dealCards(numcards)
{
    image = new Image();
    firstcard = Math.floor(Math.random() * 1000 % 52);

    do
    {
         secondcard = Math.floor(Math.random() * 1000 % 52);
    }
    while (secondcard == firstcard);

    hand = new Array(numcards);
    hand[0] = firstcard;
    hand[1] = secondcard;
    
    document.images[0].src = "http://www.college1.com/images/cards/gbCard" + firstcard + ".gif";
    document.images[1].src = "http://www.college1.com/images/cards/gbCard" + secondcard + ".gif";

return hand;

} // end of function dealCards

function hitCard(hand)
{
    numCards = hand.length;

    do
    {
         var exists = false;

         nextcard = Math.floor(Math.random() * 1000 % 52);

         for (i = 0; i < hand.length; i++)
         {
              if (nextcard == hand[i])
              {
                   exists = true;
              }  
         }
    }
    while (exists == true);

    hand.push(nextcard);
    document.images[numCards].src = "http://www.college1.com/images/cards/gbCard" + nextcard + ".gif";

return hand;

} // end of function hitCard

/*---------- Lab Assignment 10 ------------*/

function buildBlackjack()
{

	var html = '<script type="text/javascript" src="student.js"></script>';
		html += "<table border=0 style='margin:auto'><tr>";
        html += '<td><form><input type="BUTTON" onClick="Javascript:hand = dealCards(2);" value="Deal > > >"></form></td>';
		html += '<script type="text/javascript">showCards(7)</script>    <!--  See note below about showCards  -->';
    	html += '<td><form><input type="BUTTON" onClick="Javascript:hand = hitCard(hand)" value="< < < Hit Me"></form></td>';
		html += '</tr></table>';
		
		productarea.document.writeln(html);
     	
		
} // end of function buildBlackjack

function showCards(numcards)
{
	
     var data = '';
     for (i = 0; i < numcards; i++)
     {
          data += '<td><img src="http://www.college1.com/images/cards/gbCard52.gif" name="card' + i + '"></td>';
     } // end of for loop
     
     document.writeln(data);
     document.close();

} // end of function showCards

/*---------- Lab Assignment 9 ------------*/

function buildButton( itemNum, itemName, amount)
{
	
	var html= '<form name="_xclick" target="paypal" action="https://www.paypal.com" method="get">';
	html += '<input type="hidden" name="cmd" value="_cart">';
	html += '<input type="hidden" name="business" value="nora-alice@paypal.com">';
	html += '<input type="hidden" name="item_name" value="' + itemName + '">';
	html += '<input type="hidden" name="amount" value="' + amount + '">';
	html += '<input type="hidden" name="item_number" value="' + itemNum +'">';
	html += '<input type="image" src="http://www.paypal.com/en_US/i/btn/sc-but-01.gif" border="0" name="submit" alt="Make payments with PayPal - it\'s fast, free and secure!">';
	html += '<input type="hidden" name="add" value="1">';
	html += '</form>';
	
	return html;
}

function getDate()
{
     today = new Date();
     today = today.toDateString();
     return today;
}

/*---------- Lab Assignment 8 ------------*/

function getType()
{
 
uaAgentInfo = navigator.userAgent;

if (uaAgentInfo.indexOf('Firefox') != -1)
{
browser = "Firefox";
}
else if ((uaAgentInfo.indexOf('Safari') != -1) && (uaAgentInfo.indexOf('Chrome') <= -1))
{
browser = "Safari";
}
else if (uaAgentInfo.indexOf('MSIE') != -1)
{
browser = "Internet Explorer";
}
else if (uaAgentInfo.indexOf('Chrome') != -1)
{
browser = "Chrome";
}
else if (uaAgentInfo.indexOf('Opera') != -1)
{
browser = "Opera";
}

return browser;

} // end of function getType

function makeColorTableTag()
{
     var browser = getType();
     var tableTag;
    
     if(browser == "Internet Explorer")
     {
          tableTag = "<div class='browserBlack'>";
     }
     else
     {
          tableTag = "<div class='browserWhite'>";
     }  // end of if statement

     return tableTag;
} // end of function makeColorTableTag

function getVersion()
{

     var agentInfo = navigator.userAgent;
     var browser = getType();

     if (browser == "Firefox")
     {
           var position1 = agentInfo.indexOf('Firefox') + 8;
           var position2 = agentInfo.indexOf('.', position1) + 2;
           
           var version = agentInfo.substring(position1, position2);

           return version;
     }
     else if (browser == "Chrome")
     {
           var position1 = agentInfo.indexOf('Chrome') + 7;
           var position2 = agentInfo.indexOf('.', position1) + 5;
           
           var version = agentInfo.substring(position1, position2);

           return version;
     }
     else if (browser == "Safari")
     {
           var position1 = agentInfo.indexOf('Version') + 8;
           var position2 = agentInfo.indexOf('.', position1) + 5;
           
           var version = agentInfo.substring(position1, position2);

           return version;
     }
     else if (browser == "Opera")
     {
           var position1 = agentInfo.indexOf('Version') + 8;
           var position2 = agentInfo.indexOf('.', position1) + 5;
           
           var version = agentInfo.substring(position1, position2);

           return version;
     }
     else if (browser == "Internet Explorer")
     {
           var position1 = agentInfo.indexOf('MSIE') + 4;
           var position2 = agentInfo.indexOf(';',position1);
           
           var version = agentInfo.substring(position1, position2);

           return version;
     }
     return agentInfo;

} // end of function getVersion


/*---------- Lab Assignment 7 ------------*/

function changeImage(imageID, imageFile)
{
     var url = imageFile;
     document.getElementById(imageID).src = url;
     addDisplayed = 2;

} // end of changeImage

function displayPage()
{
     if (addDisplayed == 1)
     {
          buildProduct('Animal Farm', 'George Orwell', '978-1412811903', 'George Orwell\'s famous fabel of a workers revolution gone awry');
     }
     else {
          buildProduct('The Mysterious Island [Paperback]', 'Jules Verne', '978-1613822364','Verne\'s classic tale of five Americans who are stranded on an uncharted island.');
     }
} // end of displayPage


/*---------- Lab Assignment 6 ------------*/

function doSearch()
{
    var searchTerm = document.searchbox.searchterm.value;
    var productOne = 'Young Titan: The Making of Winston Churchill';
    var productTwo = 'Animal Farm';
    var productThree = 'The Mysterious Island [Paperback]';
   
    if (checkSearchTerm(productOne, searchTerm))
    {
    	buildProduct('Young Titan: The Making of Winston Churchill', 'bob smith','978-1451609912','Biography of Winston Churchill\'s career from 1901 through 1915.');
    }
    else if (checkSearchTerm(productTwo, searchTerm))
    {
        buildProduct('Animal Farm', 'George Orwell', '978-1412811903', 'George Orwell\'s famous fabel of a workers revolution gone awry');
    }
    else if (checkSearchTerm(productThree, searchTerm)) 
    {
        buildProduct('The Mysterious Island [Paperback]', 'Jules Verne', '978-1613822364','Verne\'s classic tale of five Americans who are stranded on an uncharted island.');
    }
	else
	{
       productarea.document.writeln('Invalid search term entered: ' + searchTerm + '.  Please try again');
       productarea.document.close();
    } // end of switch statement

} // end of function doSearch

function checkSearchTerm(product, searchTerm)
{
	var inString = false;
	var lowerSearchTerm = searchTerm.toLowerCase();
	var lowerProduct = product.toLowerCase();
	
	if (lowerProduct.indexOf(lowerSearchTerm) > -1)
	{
		inString = true;
	}
	return inString;
	
} // end of checkSearchTerm

/*---------- Lab Assignment 5 ------------*/


function buildProduct(prodName, author, prodID, prodDescription, amount)
{
     var data = makeHeader();
     data += makeHead();
     data += "<TABLE style='width:100%' border=1 cellpadding=10>";
     data += "<TR><TD rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>";
     data += addImage(prodID);
     data += "</TD><TD>";
     data += makeName(prodName);
     data += "</TD><TD style='text-align:right'>";
     data += makeID(prodID);
     data += "</TD></TR><TR><TD style='text-align:center' colspan=2>";
     data += makeLinkbar(prodID, prodName, amount);
     data += "</TD></TR><TR><TD colspan=2 >";
     data += makeDescription(prodDescription);
     data += "</TD></TR></TABLE>";
     data += makeFooter();

     productarea.document.writeln(data);
     productarea.document.close();

} // end of buildProduct

function makeLinkbar(prodID, prodName, amount) {
     var data = "<TABLE style='background-color:lightblue' cellpadding=5><TR><TD>"
     data += buildButton( prodID, prodName, amount);
     data += "</TD>"
     data += "<TD><A href=\"\">View Cart</A></TD>"
     data += "<TD><A href=\"\">Check out</A></TD>"
     data += "</TR></TABLE >"
     return(data)
} // end of function makeLinkbar

function makeDescription(prodDescription) {
     var data = "<B>Product Description: "
     data += prodDescription
     data += "</B>"
     return(data)
} // end of function makeDescription

function makeHeader()
{  
    var data = "<div class=\"header\">";
    data +="<h2 style='text-align:center'>" + companyName + "</h2>";
    data +="</div>";
    return(data) 
} // end of makeHeader

function makeFooter()
{
	var data = "<div class=\"footer\">";
    data +="<p style='text-align:center'><b>Copyright 2013 " + companyName + "</b></p>"
    data +="</div>"
    return(data) 
} // end of makeFooter

function makeHead()
{
	var headHtml = "<head>";
	headHtml += "<link rel=\"stylesheet\" href=\"booktopia_style.css\" type=\"text/css\">";
	headHtml += "<link href='http://fonts.googleapis.com/css?family=Julius+Sans+One' rel='stylesheet' type='text/css'>";
	headHtml += "</head>";
	return headHtml;
	
} // end of buildHead

function addImage(prodID)
{
	var imgTag = "<img src=\"" + prodID + ".jpg\" class=\"prodImage\"/>";
	return imgTag;
} // end of productImage

function makeName(prodName) {
     var data = "<STRONG>Product Name: "
     data += prodName
     data += "</STRONG>"
     return(data)
} // end of function makeName

function makeID(prodID) {
     var data = "<STRONG>ISBN # : "
     data += prodID
     data += "</STRONG>"
     return(data)
} // end of function makeID

/*---------- Lab Assignment 4 ------------*/

function changetype()
{
     if (customertype == "direct")
     {
          customertype = "advertising";
     }
     else if (customertype == "advertising")
     {
          customertype = "subscription";
     }
     else
     {
          customertype = "direct";
     }
} // end of changetype

function displaytype()
{
     if (customertype == "direct")
     {
          alert("Buy Now! From this web page! My children need new shoes!");
     }
     else if (customertype == "advertising")
     {
          alert("Support our advertisers! Click on an ad, so I can make money!");
     }
     else
     {
          alert("Renew your subscription today! My children need medicine!");
     }
} // end of displaytype

/*---------- Lab Assignment 3 ------------*/

function displayspecial()
{

	if (currentspecial == 1)
	{
		alert("The current deal is: Treasure Island, Hardback - $6.99")
	}
	if (currentspecial == 2)
	{
		alert("The current deal is: Beautiful Creatures, ebook - $3.99")
	}
	if (currentspecial == 3 )
	{
		alert("The current special is: Deathwatch, Paperback - $5.79")
	}
	currentspecial = currentspecial + 1
	if (currentspecial > 3) 
	{
		currentspecial = 1
	}
}

/*---------- Lab Assignment 2 ------------*/


function displayInfo ( )
{ 
       alert ( "My name is " + myName + ".\nThis page was built for " + classDescription + ".\nToday's date is " + theDate + "." );
}

/*---------- Lab Assignment 1 ------------*/
function confirmlink(linkname)
{ 
   if (confirm("Are you sure you want to jump to " + linkname + "?")) 
        location = linkname 
}
