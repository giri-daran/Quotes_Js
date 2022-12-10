let quote = document.querySelector('.quotes');
let Author= document.querySelector('.author');

let BTn=document.querySelector('#subquote');

const qoote=[
{
    quote:`“You know, Hobbes, some days even my lucky rocketship underpants don't help.”`,
    Author:` ―Bill Watterson`,
},
{
    quote:`"Even if we don't have the power to choose where we come from, we can still choose where we go from there."`,
    Author:` ―Stephen Chbosky`,
},
{
    quote:` "And now that you don't have to be perfect, you can be good." `,
    Author:` ―John Steinbeck`,
},
{
    quote:`“I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone.”`,
    Author:` ―Holly Black`,
},
{
    quote:`“Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about.” `,
    Author:` ―Ilona Andrews`,
},
];

BTn.addEventListener('click', function(){

    let randm= Math.floor(Math.random() * qoote.length);
    
    quote.innerText= qoote[randm].quote;
    Author.innerText=qoote[randm].Author; 
})
