/* You write a single function named wrapWords() that takes two arguments: a string and a column number.
   The function returns the string, but with line breaks inserted at just the right places
   to make sure that no line is longer than the column number. You try to break lines at word boundaries.
   Like a word processor, break the line by replacing the last space in a line with a newline.
 */

function wrapWords( str, width ) {
  var wrapped = [];
  var slicePosition = 0;

  if(str.length <= width) {
    return str;
  }
  
  do {
    slicePosition = str.lastIndexOf(" ", width) + 1;
    wrapped.push(str.slice(0, slicePosition));
    str = str.slice(slicePosition);
  } while (str.length >= width)

  wrapped.push(str)

  
  return wrapped.join('\n')
}

/* Refactored version
   
   function wrapWords( str, width ) { 
       return str.match( RegExp('.{1,' +width+ '}(\\s|$)' + '|\\S+?(\\s|$)', 'g') ).join( '\n' );
   }
 */
