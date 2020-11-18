const populateHistory = history => {
    let historyRows = []

    for(let i = 0; i < 3; i++){
        if(!history){
            historyRows.push(`
                <div class="table-row">
                    <span>------</span>
                    <span>------</span>
                    <span>------</span>
                    <span>------</span>
                </div>
            `)
        }
        else if(!history[i]){
            historyRows.push(`
                <div class="table-row">
                    <span>------</span>
                    <span>------</span>
                    <span>------</span>
                    <span>------</span>
                </div>
            `)
        }
        else {
            let { name, grade, time, evaluate } = history[i]

            historyRows.push(`
                <div class="table-row">
                    <span>${name}</span>
                    <span>${grade}</span>
                    <span>${`${time.split('-')[0]}min e ${time.split('-')[1]}s`}</span>
                    <span>${evaluate}</span>
                </div>
            `)
        }
    }

    return historyRows
}


export default populateHistory