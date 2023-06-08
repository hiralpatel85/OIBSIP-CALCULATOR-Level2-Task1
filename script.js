function clearEntry() {
    let answer = document.getElementById("answer").value;
    const newExpression = answer.slice(0, -1);
    document.getElementById('answer').value = newExpression;
}