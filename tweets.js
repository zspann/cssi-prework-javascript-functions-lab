//==============================================================================
// Resources
//==============================================================================
// Functions - http://www.w3schools.com/js/js_functions.asp
//==============================================================================
// #1 - String Property: countChars
//==============================================================================
// Given a string, return the number of characters in that string
function countChars(userString) {
  var number = userString.length
  return number
}

//==============================================================================
// #2 - String Methods: addHashtag
//==============================================================================
//Given a string, add " #yolo" to the end of that string
function addHashtag(userString) {
  userString = userString + ' #yolo'
  return userString
}
//==============================================================================

//==============================================================================
// #2 - String Methods: excitedTweet
//==============================================================================
//Given a string, uppercase it and add "!!!" to the end of that string
function excitedTweet(userString) {
  userString = userString.toUpperCase() + "!!!"
  return userString
}
//==============================================================================
