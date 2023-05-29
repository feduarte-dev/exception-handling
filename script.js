
const verificaNumeros = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }
};

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    verificaNumeros();
    const result = Number(value1) + Number(value2);
    return result;
  } catch (error) {
    return error.message;
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
