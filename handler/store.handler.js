const Store = require('../service/store.service')

module.exports = {

    GetStore: (req, res) => {
        const s = new Store()
        const gs = s.GetStore()

        return res.status(gs.code).json(gs)
    },

    CreateStore: (req, res) => {
        const s = new Store()

        const cs = s.CreateNewStore(req.body, req.body.roles)

        return res.status(cs.code).json(cs)
    },


    UpdateStore: (req, res) => {
        const s = new Store()

        const us = s.UpdateEmployee(req.param.id, req.body, req.body.roles)

        return res.status(ue.code).json(ue)
    },

    DeleteStore: (req, res) => {
        const s = new Store()

        const ds = s.DeleteEmployee(req.param.id, req.body.roles)

        return res.status(ds.code).json(ds)
    }

}