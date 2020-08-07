let iframe

document.getElementById('search').addEventListener("click", function() {
    inputValue = document.getElementById('url_text').value
    iframe = open(inputValue, "frameTab")
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
    if(document.getElementById('url_text').value !== "") {
        alert("URL: "  + iframe.location.href + 
            "\nProtocolo: " + iframe.location.protocol + 
            "\nPorta: " + iframe.location.port + 
            "\nLargura X Altura: " + iframe.innerWidth + 'X' + iframe.innerHeight + 
            "\nSO: " + iframe.navigator.platform
        )
    }
})