const stat = (course, lecture) => {
    var lect_num = parseInt(lecture) + 20

    const sentence = 'the percent for course ' + course + ' in lecture number ' + lect_num + ' is 23' 
    return sentence
}

module.exports = stat