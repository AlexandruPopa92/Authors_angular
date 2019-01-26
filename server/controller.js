const Task = require("./models");

module.exports = {
    index: (req, res) => {
        Task.find()
            .catch(err => {
                res.json({message:"ERROR can not find any", error:err});
            })
            .then(data => {
                res.json({message:"All Authors", task:data});
            });    
    },

    add: (req, res) => {
        Task.create(req.body)
            .then(data => {
                res.json({message:"Success", task:data});
            })
            .catch(err => {
                res.json({message:"ERROR can not Save", error:err});
            });
    },

    remove: (req, res) => {
        Task.findByIdAndRemove(req.params.id)
            .catch(err => {
                res.json({message:"ERROR Deleting", error:err})
            })
            .then(data => {
                res.json({message:"Successefully Deleted", task:data})
            })
    },

    show: (req, res) => {
        Task.findById(req.params.id)
            .catch(err => {
                res.json({message:"ERROR Finding", error:err})
            })
            .then(data => {
                res.json({message:"Showing data for ID provided", task:data});
            })
    },

    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body)
            .catch(err => {
                res.json({message:"ERROR Finding", error:err});
            })
            .then(data => {
                res.json({message:"Success updated"});
            });
    }
}

