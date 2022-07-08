// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
// var name = 'hello';
var Name = 'hello';
// TODO write your code here...
Name = Name.toUpperCase()
console.log(Name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentence = sentence.replace(/\b\w|\s\w/g, fw => {
        return fw.toUpperCase()
    })
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.replace('￥','');
console.log(money);
