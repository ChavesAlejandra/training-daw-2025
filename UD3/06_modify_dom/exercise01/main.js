window.onload = function(e) {
    console.log('documento cargado')

    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!!'

    const ids = document.querySelectorAll('#username')
    console.log(`ids ${ids.length}`)

    const first = document.querySelectorAll('article .first')
    console.log(`first ${first .length}`)
    first.forEach(first => {
        first.style.color = '#99FFFF'
    })

    const item = document.querySelectorAll('li.item')
    console.log(`item ${item.length}`);

    const buttons =  document.querySelectorAll('.buttons button')
    console.log(`buttons ${buttons.length}`);
    buttons.forEach(buttons => {
        buttons.style.color = '#9999CC'
    })

    document.getElementsByTagName('p')[0].style.backgroundColor = '#9999CC'
}