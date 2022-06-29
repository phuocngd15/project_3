import {Model} from '../model/Model.model';

export const getAll = async (req, res) => {
    try {
        const profile = await Model.find();
        return res.status(200).json(profile);
    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
};

export const addOne = async (req, res) => {
    try {
        console.log("addOne Model", req.body)
        const newModel = new Model({
            name: req.body.name,
            action: req.body.action
        });
        newModel.save(function (err) {
            if (err) return res.status(500).json(err);
            return res.status(200).json(newAction);
        });
    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
};
export const createDummyData = async (req, res) => {
    try {
        console.log("createDummyData Model")
        const newAction = new Model({name: "Model 1", status: "Training", actions: ["Eating", "Running"]})
        const newAction2 = new Model({name: "Model 2", status: "Not started", actions: ["Drinking"]})
        Model.insertMany([newAction, newAction2])
            .then(data => {
                res.status(200).json(data);
            })
            .catch(error => {
                res.status(500).json({message: error});
            });

    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
}