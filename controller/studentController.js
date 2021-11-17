let Student = require('../modals/studentModal');

async function searchStudents(req,res,branch) {
    try{
            const filterStudent = await Student.search(branch);
            if(!filterStudent) {
                res.writeHeader(404, { 'Content-Type' : 'application/json' });
                return res.end(JSON.stringify({ message: 'Student not Found'}));
            } else {
                res.writeHeader(201, { 'Content-Type' : 'application/json' });
                return res.end(JSON.stringify(filterStudent));
            }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    searchStudents
}