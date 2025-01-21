const productModel = require("../model/index");

const getAllData = async (req, res) => {
  try {
    const getData = await productModel.find();
    if (!getData) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getAllDataById = async (req, res) => {
  const id = req.params.id;
  try {
    const getDataId = await productModel.find(id);
    if (!getDataId) {
      res.status(404).json({ message: "data not found!" });
    }
    res.status(200).json(getDataId);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteData = async (req,res) => {
    const id = req.params.id;
    try {
        const deleted = await productModel.findByIdAndDelete(id)
        if (!deleted) {
            res.status(404).json({ message: "data not found!" });
          }
          res.status(200).json({ message:"deleted!",deleted:deleted});
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
}

const postData = async (req,res) => {
    try {
        const createdData = productModel({...req.body})
        await createdData.save();
        if (!createdData) {
            res.status(404).json({ message: "data not found!" });
          }
          res.status(200).json({ message:"created!",createdData:createdData});
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
}

module.exports = {
  getAllData,
  getAllDataById,
  deleteData,
  postData
};
