let students = require('../data/students.json')

function search(branch) {
    return new Promise((resolve,reject) => {
        const filteredStudents = students.filter(
            item => item.branch === branch
        );
        resolve(filteredStudents);    
    })
}

module.exports = {
    search
}