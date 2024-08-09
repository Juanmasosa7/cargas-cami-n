document.getElementById('setDimensions').addEventListener('click', function () {
    const truckWidth = parseFloat(document.getElementById('truckWidth').value);
    const truckLength = parseFloat(document.getElementById('truckLength').value);
    const widthUnit = document.getElementById('truckWidthUnit').value;
    const lengthUnit = document.getElementById('truckLengthUnit').value;

    // Convert to cm if input is in meters
    const widthInCm = widthUnit === 'm' ? truckWidth * 100 : truckWidth;
    const lengthInCm = lengthUnit === 'm' ? truckLength * 100 : truckLength;

    const truckArea = document.getElementById('truck-area');
    
    // Set width and height independently
    truckArea.style.width = widthInCm + 'px';
    truckArea.style.height = lengthInCm + 'px';
});

document.getElementById('addBox').addEventListener('click', function () {
    const boxWidth = parseFloat(document.getElementById('boxWidth').value);
    const boxLength = parseFloat(document.getElementById('boxLength').value);
    const widthUnit = document.getElementById('boxWidthUnit').value;
    const lengthUnit = document.getElementById('boxLengthUnit').value;

    // Convert to cm if input is in meters
    const widthInCm = widthUnit === 'm' ? boxWidth * 100 : boxWidth;
    const lengthInCm = lengthUnit === 'm' ? boxLength * 100 : boxLength;

    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = widthInCm + 'px';
    box.style.height = lengthInCm + 'px';
    box.innerText = `W: ${widthInCm}cm, L: ${lengthInCm}cm`;

    const truckArea = document.getElementById('truck-area');
    truckArea.appendChild(box);

    box.addEventListener('mousedown', function (e) {
        const offsetX = e.clientX - box.offsetLeft;
        const offsetY = e.clientY - box.offsetTop;

        function moveBox(e) {
            box.style.left = (e.clientX - offsetX) + 'px';
            box.style.top = (e.clientY - offsetY) + 'px';
        }

        function stopMoving() {
            document.removeEventListener('mousemove', moveBox);
            document.removeEventListener('mouseup', stopMoving);
        }

        document.addEventListener('mousemove', moveBox);
        document.addEventListener('mouseup', stopMoving);
    });

    box.addEventListener('dblclick', function () {
        const currentWidth = box.offsetWidth;
        const currentHeight = box.offsetHeight;

        box.style.width = currentHeight + 'px';
        box.style.height = currentWidth + 'px';
    });
});
