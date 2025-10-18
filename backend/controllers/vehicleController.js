const firebase = require('../config/firebase');

exports.getVehicles = async (req, res) => {
  try {
    const vehiclesSnapshot = await firebase.firestore().collection('vehicles').get();
    const vehicles = vehiclesSnapshot.docs.map(doc => doc.data());
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
