document.onload = () => 
    {
        console.log('start')

        const divs = document.getElementsByTagName('div')
        console.log(`divs  ${divs.length}`);

        const buttons = document.querySelectorAll('.buttons')
        console.log(`buttons ${buttons.length}`);

        const divButton = document.querySelector('div.buttons')//este coge uno
        console.log(`divButton ${divButton.innerHTML}`);

        divButton = document.querySelectorAll('div.buttons')//este coge todos
        console.log(`divButton ${divButton.length}`);

        divButton = document.getElementsByTagName('div').getElementsByClassName('buttons')
        console.log(`divButton ${divButton.length}`);
    }