document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const id = form.ID.value;
        const nombre = form.nombre.value;
        const descripcion = form.descripcion.value;
        const cantidad = form.cantidad.value;
        const color = form.color.value;
        

        // Validate the inputs (you can add more validation as needed)
        if (id && nombre && descripcion && cantidad > 0 && color) {
            // Create a new row and cells
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${descripcion}</td>
                <td>${cantidad}</td>
                <td>${color}</td>
            `;

            // Append the new row to the table body
            tableBody.appendChild(newRow);

            // Reset the form fields
            form.reset();
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
        
    });
});
