function calculate() {
  const A = parseFloat(document.getElementById('A').value) || 0;
  const B = parseFloat(document.getElementById('B').value) || 0;
  const C = parseFloat(document.getElementById('C').value) || 0;
  let X = B * C / A;
  // Verifica se X é inteiro e formata de acordo
  X = Number.isInteger(X) ? X.toFixed(0) : X.toFixed(2);
  document.getElementById('X').innerText = X;
}

function reset() {
  document.getElementById('A').value = '';
  document.getElementById('B').value = '';
  document.getElementById('C').value = '';
  document.getElementById('X').innerText = 'X';
}