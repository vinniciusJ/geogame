const evaluates = [
    'Ganbatte',
    'Quase!',
    'Parabéns!',
    'Excelente!',
    'Sensacional!'
]

export default function Player(name){
    this.name = name
    this.correctAnswers = 0
    this.timeSpent = ''
    this.grade = 0
    this.evaluate = ''

    this.setTimeSpent = (minutes, seconds) => this.timeSpent = `${minutes}-${seconds}`
    this.calculateGrade = () => this.grade -= +this.timeSpent.split('-')[0]
    this.setEvaluate = () => {
        for(let i = 0; i < 20; i+=4){
            if(this.grade >= i && this.grade <= (i + 4)){
                this.evaluate = evaluates[(i/4)]
            }
        }
    }
    this.toString = () => `name=${this.name}&correct_answers=${this.correctAnswers}&time=${this.timeSpent}&grade=${this.grade}&evaluate=${this.evaluate}`
}