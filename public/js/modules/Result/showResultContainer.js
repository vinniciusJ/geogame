const showResultContainer = (title, { name, evaluate, time, grade }) => (`
    <div class="div-title">
        <h2>${title}</h2>
    </div>
    <div class="data">
        <div class="score-container">
            <p>Nome: <span class="name">${name}</span></p>
        </div>
        <div class="score-container">
            <p>Avaliação: <span class="evaluation">${evaluate}</span></p>
        </div>
        <div class="score-container">
            <p>Nota: <span class="grade">${grade}</span></p>
        </div>
        <div class="score-container">
            <p>Tempo: <span class="time">${time.split('-')[0]}min e ${time.split('-')[1]}s</span></p>
        </div>
    </div>       
`)

export default showResultContainer