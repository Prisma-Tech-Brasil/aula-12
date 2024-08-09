function analisarArray() {
  const input = document.getElementById('arrayInput').value;
  const array = input.split(',').map(Number);

  let soma = 0;
  let maioresQue10 = [];

  array.forEach(num => {
      soma += num;
      if (num > 10) {
          maioresQue10.push(num);
      }
  });

  const media = soma / array.length;

  document.getElementById('sum').textContent = soma;
  document.getElementById('average').textContent = media.toFixed(2);
  document.getElementById('greaterThan10').textContent = maioresQue10.length ? maioresQue10.join(', ') : '-';
}
