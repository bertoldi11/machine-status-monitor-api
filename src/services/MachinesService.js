const Sequelize = require('sequelize')

// const sequelize = require('./connection')
const sequelize = new Sequelize('machine-status-monitor', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const MachineModel = sequelize.import('../models/Machine')

const addMachine = async (req, res) => {
    const machine = await MachineModel.create(req.body)
    return res.json(machine)
}

const getAllMachines = async (req, res) => {
    const machines = await MachineModel.findAll({
      attributes: ['id', 'name']
    })
    return res.json(machines)
}

const getMachine = async (req, res) => {
    const machine = await MachineModel.findByPk(req.params.id)
    return res.json(machine)
}

const updateMachine = async (req, res) => {
    const machine = await MachineModel.update(req.body, { where: { id: req.params.id }})
    return res.json(machine)
}

const deleteMachine = async (req, res) => {
    const machine = await MachineModel.destroy({ where: { id: req.params.id } })
    return res.json(machine)
}

module.exports = {
    addMachine,
    getAllMachines,
    getMachine,
    updateMachine,
    deleteMachine
}
