const uuid = require('uuid')
const templateResponse = require('../helper/response.helper')
const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

class Employee {

    GetEmployee() {

        try {
            const resp = templateResponse.response
            resp.code = 200
            resp.data = null
            resp.error = null
            resp.message = `Successfully Get Data Employee`

            return resp

        } catch (error) {
            resp.code = 500
            resp.data = null
            resp.error = error.message
            resp.message = new Error('Internal Server Error').message

            return resp

        }
    }

    CreateNewEmployee(request, roles) {
        const resp = templateResponse.response

        try {


            if (roles != 'superadmin') {
                resp.code = 401
                resp.data = null
                resp.error = new Error('Unauthorized Employee').message
                resp.message = new Error('Unauthorized Employee').message

                return resp
            }

            const data = {
                name: request.name,
                emp_code: uuid(),
                role: request.roles,
                status: true,
                created_at: formattedDate,
            }

            resp.code = 200
            resp.data = data
            resp.error = null
            resp.message = 'Successful'

            return resp

        } catch (error) {
            resp.code = 500
            resp.data = null
            resp.error = error.message
            resp.message = new Error('Internal Server Error').message

            return resp

        }

    }

    UpdateEmployee(id, request, roles) {
        const resp = templateResponse.response

        try {
            if (roles != 'superadmin') {
                resp.code = 401
                resp.data = null
                resp.error = new Error('Unauthorized Employee').message
                resp.message = new Error('Unauthorized Employee').message
                return resp
            }

            if (id == undefined || (typeof id != number) || request == null) {
                return new Error('Bad Request').message
            }

            resp.code = 200
            resp.data = null
            resp.error = null
            resp.message = `Successful Update ${id}`

            return resp

        } catch (error) {
            resp.code = 500
            resp.data = null
            resp.error = error.message
            resp.message = new Error('Internal Server Error').message

            return resp
        }
    }

    DeleteEmployee(id, roles) {
        const resp = templateResponse.response

        try {
            if (roles != 'superadmin') {
                resp.code = 401
                resp.data = null
                resp.error = new Error('Unauthorized Employee').message
                resp.message = new Error('Unauthorized Employee').message

                return resp
            }

            resp.code = 200
            resp.data = null
            resp.error = null
            resp.message = `Successful Update ${id}`

            return resp

        } catch (error) {
            resp.code = 500
            resp.data = null
            resp.error = error.message
            resp.message = new Error('Internal Server Error').message

            return resp


        }
    }
}

module.exports = Employee

