const createError = require('http-errors');
const { Superpower } = require('../models');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    
    const createdSuperpower = await superheroInstance.createSuperpower(body);
    res.status(201).send({
      data: createdSuperpower,
    });
  } catch (err) {
    res.status(400).send({
      err,
    });
   
  }
};

module.exports.getUserSuperpower = async (req, res, next) => {
  try {
    const { superheroInstance, pagination = {} } = req;

    const Superpowers = await superheroInstance.getSuperpowers({ ...pagination });
    console.log(superheroInstance);
    res.send(superpowers);
  } catch (err) {
    next(err);
  }
};

module.exports.updateSuperpower = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
      body,
    } = req;

    const [rowsCount, updatedSuperpower] = await Superpower.update(body, {
      where: { id: superpowerId },
      returning: true,
    });

    if (rowsCount !== 1) {
      return next(createError(400, "Superpower can't be updated"));
    }

    res.send({
      data: updatedSuperpower,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteSuperpower = async (req, res, next) => {
  try {
    const {
      params: { superpowerId },
    } = req;

    const rowsCount = await Superpower.destroy({ where: { id: SuperpowerId } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Superpower not found'));
    }

    res.send({
      data: rowsCount,
    });
  } catch (err) {
    next(err);
  }
};