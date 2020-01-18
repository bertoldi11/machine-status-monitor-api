const Sequelize = require('sequelize')

// const sequelize = require('./connection')
const sequelize = new Sequelize('machine-status-monitor', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

const StatusModel = sequelize.import('../models/Status')

const addStatus = async (req, res) => {
    const status = await StatusModel.create(req.body)
    return res.json(status)
}

const getAllStatuses = async (req, res) => {
    const statuses = await StatusModel.findAll({
      attributes: ['id', 'name']
    })
    return res.json(statuses)
}

const getStatus = async (req, res) => {
    const status = await StatusModel.findByPk(req.params.id)
    return res.json(status)
}

const updateStatus = async (req, res) => {
    const status = await StatusModel.update(req.body, { where: { id: req.params.id }})
    return res.json(status)
}

const deleteStatus = async (req, res) => {
    const status = await StatusModel.destroy({ where: { id: req.params.id } })
    return res.json(status)
}

module.exports = {
    addStatus,
    getAllStatuses,
    getStatus,
    updateStatus,
    deleteStatus
}
