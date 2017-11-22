/* 
    At_Grandparents Twitter Bot 
    Created by Cole Huffman
    www.cjhuffman.com
    www.github.com/Sureto96
*/

twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

// Array containing first half of randomized string.

var opener = ["What the heck is  ", 
              "Why do I give a hoot about ", 
              "Oh dear, how do I use ", 
              "How the heck do I use ", 
              "What is my password for ", 
              "Oh boy, I bet it's because of ", 
              "Why did I get this popup on ", 
              "How many times to I have to enter ", 
              "What button do I hit to get to ", 
              "What is ", 
              "Can I play Solitaire on ", 
              "How do I get the picture on ", 
              "How do I use my iPhone to get onto ", 
              "Where do I find ", 
              "I just receieved an e-mail about ", 
              "How do I send you something on "
              ];
// Array containing second half of randomized string.

var closing = ["the Google", 
               "an Instagram", 
               "my printer", 
               "a Bing", 
               "Googley", 
               "a profile", 
               "an eBay", 
               "my password", 
               "Blu-Ray", 
               "the dark net", 
               "Ee-lectronic mail", 
               "the Hotmail", 
               "my Solitare", 
               "bingo game", 
               "a Microsoft Office", 
               "JavScript", 
               "Donald Trump's tweets", 
               "the YouTube", 
               "a malware", 
               "my CPU", 
               "my keyboard", 
               "my TV", 
               "my Facebook chat", 
               "an AppleBook", 
               "a Macintosh Apple", 
               "the libary homepage", 
               "the weather reports", 
               "a RAM", 
               "the control-alt-delete button", 
               "an anti-virus alert", 
               "the power button", 
               "my pictures", 
               "the Us-buh port"
              ];

// Declare variable for combined arrays as final string.

var myMessage;

// Function utilized to create string for post. 

var generateMessage = function() {
    messageOpener = (opener[Math.floor(Math.random() * opener.length)]);
    messageClosing = (closing[Math.floor(Math.random() * closing.length)]);
    
    myMessage = (messageOpener + messageClosing);
    
    return myMessage;
}

// Confirm bot is running by returning status log for every one minute.

var giveStatus = function () {
    console.log("1 minute has passed, running.")
}

// Declare tweetMessage variable as myMessage

var tweetMessage = myMessage;

// declare writeTweet variable as function to post tweet

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: myMessage
    }, function(err, data, response) {
        console.log(data);
    });
}

// Set intervals for tweet creation, posting and status updates. 

setInterval(giveStatus, 60000),
setInterval(generateMessage, 1750000);
setInterval(writeTweet, 1800000);