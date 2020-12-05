module.exports = {
    index(request, response){
        return response.render('index')
    },
    name(request, response){
        return response.render('name')
    },
    game(request, response){
        return response.render('game')
    },
    result(request, response){
        const { name, hits, time, grade, evaluate } = request.params

        console.log(name, hits, time, grade, evaluate )

        return response.render('results', { name, hits, time, grade, evaluate })
    },
    sobrenos(request, response){
        return response.render('sobrenos')
    }
}