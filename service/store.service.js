const uuid = require('uuid')
const templateResponse = require('../helper/response.helper')
const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

class Store {

    GetStore() {

        try {
            const resp = templateResponse.response
            resp.code = 200
            resp.data = null
            resp.error = null
            resp.message = `Successfully Get Store Data`

            return resp

        } catch (error) {
            resp.code = 500
            resp.data = null
            resp.error = error.message
            resp.message = new Error('Internal Server Error').message

            return resp

        }
    }

    CreateNewStore(request, roles) {
        const resp = templateResponse.response

        try {

            if (roles != 'superadmin') {
                resp.code = 401
                resp.data = null
                resp.error = new Error('Unauthorized Employee').message
                resp.message = new Error('Unauthorized Employee').message

                return resp
            }

            if (request.roles != 'superadmin' || 'employee') {
                resp.code = 400
                resp.data = null
                resp.error = new Error('Bad Request').message
                resp.message = new Error('Bad Request').message

                return resp
            }

            const data = {
                name: request.name,
                store_code: uuid(),
                store_address: request.address,
                store_phone: request.phone,
                store_level: request.level,
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

    UpdateStore(id, request, roles) {
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

    DeleteStore(id, roles) {
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

module.exports = Store

