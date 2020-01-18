const { Router } = require('express');
const MachineService = require('./services/MachinesService')
const StatusService = require('./services/StatusesService')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.get('/machines', MachineService.getAllMachines)
router.post('/machines', MachineService.addMachine)
router.get('/machine/:id', MachineService.getMachine)
router.put('/machine/:id', MachineService.updateMachine)
router.delete('/machine/:id', MachineService.deleteMachine)

router.get('/statuses', StatusService.getAllStatuses)
router.post('/statuses', StatusService.addStatus)
router.get('/status/:id', StatusService.getStatus)
router.put('/status/:id', StatusService.updateStatus)
router.delete('/status/:id', StatusService.deleteStatus)

module.exports = router;
