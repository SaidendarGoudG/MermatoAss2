// Add your JavaScript code here
// Example JavaScript code
function changeImage(imageSrc) {
    document.querySelector('.product-image').src = imageSrc;
}

function updateVariant() {
    // Update variant information based on user selection
    // Calculate discount percentage
    const price = parseFloat(document.getElementById('price').innerText.substring(1));
    const comparePrice = parseFloat(document.getElementById('compare-price').innerText.substring(1));
    const discountPercent = ((comparePrice - price) / comparePrice) * 100;

    // Display discount percentage
    document.getElementById('discount-percent').innerText = discountPercent.toFixed(2);

    // Save selected variant data (color, size, etc.)
    const selectedColor = getSelectedColor();
    const selectedSize = document.querySelector('input[name="size"]:checked').value;

    // Update selected color and size in modal message
    document.getElementById('selected-color').innerText = selectedColor;
    document.getElementById('selected-size').innerText = selectedSize;
}

function getSelectedColor() {
    const colorDemos = document.querySelectorAll('.color-demo');
    for (const demo of colorDemos) {
        if (demo.classList.contains('selected')) {
            return demo.style.backgroundColor;
        }
    }
    return null;
}

function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000); // Hide modal after 2 seconds
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity-selector');
    if (quantityInput.value > 1) {
        quantityInput.value--;
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity-selector');
    quantityInput.value++;
}

function updateColor(colorDemo) {
    // Update color based on user selection
    const colorDemos = document.querySelectorAll('.color-demo');
    colorDemos.forEach(demo => {
        demo.classList.remove('selected');
    });
    colorDemo.classList.add('selected');
    const colorSelector = document.getElementById('color-selector');
    colorSelector.value = colorDemo.style.backgroundColor;
}
