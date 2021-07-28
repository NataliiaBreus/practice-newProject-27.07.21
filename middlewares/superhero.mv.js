const { Superhero } = require('../models');

module.exports.checkSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superheroInstance = await Superhero.findByPk(id);

    if (!superheroInstance) {
      throw new Error('User not found');
    }
    req.superheroInstance = superheroInstance;
    next();
  } catch (error) {
    next(error);
  }
};