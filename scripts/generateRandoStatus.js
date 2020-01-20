const models = require('../src/models')

models.Status.findAll().then(statuses => {
  if (statuses.length > 0) {
    models.Machine.findAll().then(machines => {
      machines.forEach(machine => {
        const randomPosition = Math.floor(Math.random() * statuses.length)
        const idStatus = statuses[randomPosition].id
        const params = { id_machine: machine.id, id_status: idStatus }
        console.log(params)
        models.MachineStatus.create({ id_machine: machine.id, id_status: idStatus }).then(() => true)  
      })
    })
  }
})

