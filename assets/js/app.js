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
};

let text = prompt ('Enter yor combination');
let uptext = text.toUpperCase();
let arrtext = [...uptext];
      console.log (`Your combination = ${uptext}`)
      let result = arrtext.map(item=>
          alphabet[item])
          .filter( (item)=> typeof item !== 'undefined').join(' ');
       console.log (`result = ${result}`);
   
