import {VideoModel} from '../model/Video.model';


export const getAll = async (req, res) => {
    try {
        console.log("getAll VideoModel")
        const profile = await VideoModel.find();
        return res.status(200).json(profile);
    } catch (err) {
        return res.status(500).json({infoMessage: 'Server error'});
    }
};

export const addOne = async (req, res) => {
    try {
        console.log("addOne VideoModel")
        const newAction = new VideoModel({name: "An", description: "none"})
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
        console.log("createDummyData VideoModel")
        const newVideo = new VideoModel({
            name: "Model 1",
            status: "Done",
            actions: ["Eating", "Running"],
            modelName: "ABC"
        })
        const newVideo2 = new VideoModel({name: "Model 2", status: "Running", actions: ["Drinking"], modelName: "XYZ"})
        VideoModel.insertMany([newVideo, newVideo2])
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