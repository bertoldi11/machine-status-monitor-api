const Sequelize = require('sequelize')
const dbUser = process.env.DB_USER || 'root'
const dbPassword = process.env.DB_PASSWORD || '123456'
const dbName = process.env.DB_NAME || 'machine-status-monitor'
const dbHost = process.env.DB_HOST || 'localhost'

// const sequelize = require('./connection')
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
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
