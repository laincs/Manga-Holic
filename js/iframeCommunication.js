function sendMessageToIframe(message) {
    var iframe = document.getElementById("headerIframe");
    if (iframe) {
        iframe.contentWindow.postMessage(message, "*");
    }
}