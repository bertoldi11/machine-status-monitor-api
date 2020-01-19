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
