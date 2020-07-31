const stat = (course, lecture) => {
    var lect_num = parseInt(lecture)

    // TODO make connection to db
    const percent_from_db = Math.random().toFixed(2)*100
    
    const sentence = 'the percent for course ' + course + ' in lecture number ' + lect_num + ' is ' + percent_from_db 
    return sentence
}

module.exports = stat