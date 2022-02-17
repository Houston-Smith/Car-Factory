
const createChassis = () =>
{
  newChassisObject = {

  }
  return newChassisObject
}

const addWheels = (chassisObject) => {
  chassisObject.wheels = 4
  return chassisObject
} 

const addEngine = (chassisObject) => {
  chassisObject.engine = "4.8L"
  return chassisObject
}

const addSteeringWheel = (chassisObject) => {
  chassisObject.steeringWheel = "Tilting"
  return chassisObject
}

const addBody = (chassisObject) => {
  chassisObject.body = "Fever"

  return chassisObject
}

const addDriveTrain = (chassisObject) => {
  chassisObject.driveTrain = "Two wheel drive"
  return chassisObject
}

// const chassis = createChassis()
// console.log(chassis)

// const chassisWithWheels = addWheels(chassis)
// console.log(chassisWithWheels)

// const chassisWithEngine = addEngine(chassisWithWheels)
// console.log(chassisWithEngine)

// const chassisWithSteeringWheel = addSteeringWheel(chassisWithEngine)
// console.log(chassisWithSteeringWheel)

// const chassisWithBody = addBody(chassisWithSteeringWheel)
// console.log(chassisWithBody)

// const chassisWithDriveTrain = addDriveTrain(chassisWithBody)
// console.log(chassisWithDriveTrain)



const buildCar = () => {
  const chassis = createChassis()
  addWheels(chassis)
  addEngine(chassis)
  addSteeringWheel(chassis)
  addBody(chassis)
  addDriveTrain(chassis)
  return(chassis)
}

const fordFever = buildCar()
console.log(fordFever)
