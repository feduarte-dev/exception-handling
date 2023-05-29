const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');

// Requisito 1 - Lance um erro em caso de input vazio.
const emptyInput = () => {
  if (!value1.value || !value2.value) {
    throw new Error('Preencha os campos para realizar a soma');
  }
};

// Requisito 2 - Lance um erro em caso de valores não numéricos.
const isNumber = () => {
  const result = Number(value1.value) + Number(value2.value);
  if (Number.isNaN(Number(result))) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

// Requisito 3 - Apague os inputs ao clicar no botão de realizar a soma.
const clearInput = () => {
  value1.value = '';
  value2.value = '';
};

function calculateSum() {
  try {
    emptyInput();
    isNumber();
    const result = Number(value1.value) + Number(value2.value);
    return result;
  } catch (e) {
    return e.message;
  } finally {
    clearInput();
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
