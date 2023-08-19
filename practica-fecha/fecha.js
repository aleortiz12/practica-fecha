const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    let dayText = '';
    switch (dayOfWeek) {
        case 0:
            dayText = 'Fin de semana';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            dayText = 'Día laborable';
            break;
        case 6:
            dayText = 'Fin de semana';
            break;
        default:
            dayText = 'Día no válido';
    }

    result.textContent = `${dayText}, ${date.toLocaleDateString('es-ES', { weekday: 'long' })}`;
});