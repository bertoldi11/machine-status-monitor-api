const models = require('../models')

const addMachine = async (req, res) => {
    const machine = await models.Machine.create(req.body)
    return res.json(machine)
}

const getAllMachines = async (req, res) => {
    const machines = await models.Machine.findAll({
      attributes: ['id', 'name'],
      include: [{
        model: models.Status,
        as: 'status',
        required: false,
        attributes: ['id', 'name'],
        through: { attributes: [] }
      }]
    })
    return res.json(machines)
}

const getMachine = async (req, res) => {
    const machine = await models.Machine.findByPk(req.params.id)
    return res.json(machine)
}

const updateMachine = async (req, res) => {
    const machine = await models.Machine.update(req.body, { where: { id: req.params.id }})
    return res.json(machine)
}

const deleteMachine = async (req, res) => {
    const machine = await models.Machine.destroy({ where: { id: req.params.id } })
    return res.json(machine)
}

module.exports = {
    addMachine,
    getAllMachines,
    getMachine,
    updateMachine,
    deleteMachine
}
