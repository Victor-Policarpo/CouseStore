const pathArray = window.location.pathname.split('/');
const courseId = pathArray[pathArray.length - 1];

async function loadDetails() {
    try {
        const response = await fetch(`/courses/${courseId}`);
        if (!response.ok) throw new Error("Course not found");
        
        const curso = await response.json();

        document.getElementById('details-title').innerText = curso.title;
        document.getElementById('details-image').src = curso.image;
        document.getElementById('details-instructor').innerText = curso.instructor;
        document.getElementById('details-description').innerText = curso.description;
        document.getElementById('details-level').innerText = curso.level;
        document.getElementById('details-duration').innerText = curso.duration;
        document.getElementById('details-spots').innerText = curso.availableSpots;

        const priceEl = document.getElementById('unit-price');
        priceEl.innerText = `R$ ${curso.price.toFixed(2).replace('.', ',')}`;
        priceEl.setAttribute('data-price', curso.price);
        calculateAll();
        
        calculateAll();
    } catch (error) {
        console.error("Erro:", error);
        alert("Error loading course details.");
    }
}

function calculateAll() {
    const priceEl = document.getElementById('unit-price');
    const price = parseFloat(priceEl.getAttribute('data-price')) || 0;
    const qtyInput = document.getElementById('quantity-input');
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) {
        qty = 1;
    }
    const totalRaw = (price * qty).toFixed(2);
    const totalFormatado = totalRaw.replace('.', ',');
    
    document.getElementById('total-display').innerText = `R$ ${totalFormatado}`;
}


function goToEdit() {
    window.location.href = `/private/edit/${courseId}`;
}

window.addEventListener('load', loadDetails);

const qtyInput = document.getElementById('quantity-input');
if(qtyInput) {
    qtyInput.addEventListener('input', calculateAll);
}