function calculator(type, value) {
    if (type === 'action') {

        if (value === 'c') {
            document.getElementById('result').value = '';
        }

        if (value === '*' || value === '-' || value === '+' || value === '.' || value === '/') {
            document.getElementById('result').value += value;
        }

        if (value === '=') {
            const camp_value = eval(document.getElementById('result').value);
            document.getElementById('result').value = camp_value;
        }

    } else if (type === 'value') {

        document.getElementById('result').value += value;
    }
}