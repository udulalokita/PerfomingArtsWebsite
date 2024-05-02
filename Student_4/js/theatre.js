function zoomImage(img) {
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.zIndex = '9999';

    var imgZoom = document.createElement('img');
    imgZoom.src = img.src;
    imgZoom.style.display = 'block';
    imgZoom.style.maxWidth = '90%';
    imgZoom.style.maxHeight = '90%';
    imgZoom.style.margin = 'auto';
    imgZoom.style.position = 'absolute';
    imgZoom.style.top = '0';
    imgZoom.style.bottom = '0';
    imgZoom.style.left = '0';
    imgZoom.style.right = '0';

    modal.appendChild(imgZoom);
    document.body.appendChild(modal);

    modal.onclick = function() {
        document.body.removeChild(modal);
    };
}