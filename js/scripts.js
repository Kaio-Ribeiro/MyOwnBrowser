document.getElementById('search').addEventListener("click", function() {
    const inputValue = document.getElementById('url_text').value
    open(inputValue, "frameTab")
    document.querySelector('.responsive-iframe').src = inputValue
})

document.querySelector('.dot').addEventListener("click", function() {
    document.querySelector('.responsive-iframe').src = "about:blank"
    document.getElementById('url_text').value = ""

    document.querySelector('.right').style.visibility = "hidden"
    document.querySelector('.left').style.visibility = "hidden"
    document.querySelector('.middle').style.visibility = "hidden"

    document.querySelector('.newTab').style.visibility = "visible"
})

document.querySelector('.newTab').addEventListener("click", function() {
    document.querySelector('.newTab').style.visibility = "hidden"

    document.querySelector('.right').style.visibility = "visible"
    document.querySelector('.left').style.visibility = "visible"
    document.querySelector('.middle').style.visibility = "visible"
})

document.getElementById('details').addEventListener("click", function() {
    const inputText = document.querySelector('.responsive-iframe').src
    const iframe = open(inputText, "frameTab")

    alert("URL: "  + iframe.location.href + "\nProtocolo: " + "\nPorta" + "\nLargura X Comprimento: " + "\nSO: ")
})