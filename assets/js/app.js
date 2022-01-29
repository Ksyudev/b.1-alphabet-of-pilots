const alphabet = {
'A':'Alfa',
'B':'Bravo',
'C':'Charlie',
'D':'Delta',
'E':'Echo',
'F':'Foxtrot',
'G':'Golf',
'H':'Hotel',
'I':'India',
'J':'Juliett',
'K':'Kilo',
'L':'Lima',
'M':'Mike​',
'N':'November',
'O':'Oscar',
'P':'Papa',
'Q':'Quebec',
'R':'Romeo',
'S':'Sierra',
'T':'Tango',
'U':'Uniform',
'V':'Victor',
'W':'Whiskey',
'X':'X-ray',
'Y':'Yankee',
'Z':'Zulu',
'0':'Nadazero',
'1':'Unaone',	
'2':'Bissotwo',	
'3':'Terrathree',	
'4':'Kartefour',	
'5':'Pantafive',	
'6':'Soxisix',	
'7':'Setteseven',	
'8':'Oktoeight',	
'9':'Novenine',	
',':'Decima'
}

let text = prompt ('Enter yor combination');
console.log (`Your combination = ${text}`)
let arrtext = [...text];
 arrtext = arrtext.map(function(x){ return x.toUpperCase() });
let result = '';
 arrtext.forEach (item=>
    {result+=alphabet[item];});
 console.log (`result = ${result}`);