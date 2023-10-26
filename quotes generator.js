const generatequote = function()
{
    const quotes = [
        {
            quote: "\"It is impossible to manufature or imitate love\"",
            author: "Horace slughorn"
        },

        {
            quote: "\"You can always edit a bad page. You can’t edit a blank page\"",
            author: "Jodi Picoult"
        },

        {
            quote: "\"You can’t wait for inspiration. You have to go after it with a club.\"",
            author: " Jack London"
        },

        {
            quote: "\"If you have no critics, you’ll likely have no success.\"",
            author: " Malcolm X"
        },

        {
            quote: "\"Be yourself; everyone else is already taken.\"",
            author: "Oscar Wilde"
        },

        {
            quote: "\"You only live once, but if you do it right, once is enough.\"",
            author: " Mae West"
        },

        {
            quote: "\"Be the change that you wish to see in the world.\"",
            author: "Mahatma Gandhi"
        },

        {
            quote: "\"If you tell the truth, you don't have to remember anything.\"",
            author: "Mark Twain"
        },

        {
            quote: "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\"",
            author: "Mahatma Gandhi"
        },

        {
            quote: "\"It's none of their business that you have to learn to write. Let them think you were born that way.\"",
            author: "Ernest Hemingway"
        },

        {
            quote: "\"if you want it, work for it.\"",
            author: "Mae West"
        },

    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length) ;
    document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}
window.onload = function()
{
    generatequote();
    document.getElementById("btn").addEventListener('click',generatequote);
}