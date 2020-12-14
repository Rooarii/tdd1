// Type your code here
const capitalizeFirstLetters =(input)=>{
  // return input.length && !input.includes(' ') > 0 ? input[0].toUpperCase() + input.slice(1): '';

  // first code version
  let output = '';
  if (input.length >0 && !input.includes(' '))
    {
      output = input[0].toUpperCase() + input.slice(1);
    }
  else if (input.length >0 && input.includes(' '))
    {
      outputSplit = input.split(' ').map(e =>(
        e[0].toUpperCase()+ e.slice(1))
      );
      output = outputSplit.join(' ');
    }
  else 
    {
      output ='';
    }
  return output;
}

module.exports = capitalizeFirstLetters;