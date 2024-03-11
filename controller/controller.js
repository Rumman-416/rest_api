const api = require("../model/model");

async function showData(req, res) {
  try {
    const data = await api.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function showParticularData(req, res) {
  try {
    const { id } = req.params;
    const data = await api.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function postData(req, res) {
  try {
    const newData = {
      name: req.body.name,
      id: req.body.id,
    };
    const data = await api.create(newData);
    return res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function updateData(req, res) {
  try {
    const { id } = req.params;
    const data = await api.findByIdAndUpdate(id, req.body);

    if (!data) {
      return res.status(404).send("data not found");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function deleteData(req, res) {
  try {
    const { id } = req.params;
    const data = await api.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).send("data not found");
    } else {
      return res.status(200).send("data deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  showData,
  postData,
  showParticularData,
  updateData,
  deleteData,
};
