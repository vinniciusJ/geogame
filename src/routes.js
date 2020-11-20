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
        return response.render('results')
    },
    sobrenos(request, response){
        return response.render('sobrenos')
    }
}