const yup = require("yup");
const validate = async (req, res, next) => {
  try {
    const Schema = yup.object().shape({
      nom: yup.string().required(),
      age: yup.number().required(),
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = validate;
