import {ActionModel} from '../model/Action.model';

export const getAll = async (req, res) => {
    try {
        const profile = await ActionModel.find();
        return res.status(200).json(profile);
    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
};

export const addOne = async (req, res) => {
    try {
        console.log("addOne action")
        const newAction = new ActionModel({
            name: req.body.name || "defaultName",
            description: req.body.action || ""
        });
        newAction.save(function (err) {
            if (err) return res.status(500).json(err);
            return res.status(200).json(newAction);
        });
    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
};

export const createDummyData = async (req, res) => {
    try {
        console.log("createDummyData Action")
        const newAction = new ActionModel({name: "Running", description: "not yet"})
        const newAction2 = new ActionModel({name: "Drinking", description: "not yet2"})
        ActionModel.insertMany([newAction, newAction2])
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