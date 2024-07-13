let fields = [
    null,
    'circle',
    null,
    'cross',
    null,
    null,
    null,
    null,
    null
];


function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            const index = i * 3 + j;
            if (fields[index]) {
                cell.classList.add(fields[index]);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    contentDiv.appendChild(table);
}