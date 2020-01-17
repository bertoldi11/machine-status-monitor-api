const { Router } = require('express');
const MachineService = require('./services/MachinesService')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.get('/machines', MachineService.getAllMachines)
router.post('/machines', MachineService.addMachine)
router.get('/machine/:id', MachineService.getMachine)
router.put('/machine/:id', MachineService.updateMachine)
router.delete('/machine/:id', MachineService.deleteMachine)

module.exports = router;
