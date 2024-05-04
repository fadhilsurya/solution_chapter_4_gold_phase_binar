const Employee = require('../service/user.service')

module.exports = {

    TestUserHealth: (req, res) => {
        try {

            // test we gonna see the response in the param
            // console.log(`this is what we get from the params in education ${req.query.education}`)

            res.status(200).json({
                message: 'successfully entering test user handler part',
                data: [
                    {
                        name: "fadhil",
                        occupation: "software engineer - backend",
                        location: "jakarta"
                    },
                    {
                        name: "dije",
                        occupation: "student / teacher",
                        location: "jakarta"
                    }
                ]
            })

            return

        } catch (error) {
            res.status(500).json({
                message: 'server busy',
                data: null,
                err: error.message
            })
            return
        }

    },

    GetEmployee: (req, res) => {
        const employee = new Employee()
        const getEmp = employee.GetEmployee()

        return res.status(getEmp.code).json(getEmp)
    },

    CreateEmployee: (req, res) => {
        const employee = new Employee()

        const ce = employee.CreateNewEmployee(req.body, req.body.roles)

        return res.status(ce.code).json(ce)
    },


    UpdateEmployee: (req, res) => {
        const employee = new Employee()

        const ue = employee.UpdateEmployee(req.param.id, req.body, req.body.roles)

        return res.status(ue.code).json(ue)
    },

    DeleteEmployee: (req, res) => {
        const employee = new Employee()

        const ue = employee.DeleteEmployee(req.param.id, req.body.roles)

        return res.status(ue.code).json(ue)
    }

}