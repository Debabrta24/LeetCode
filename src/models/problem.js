const mongoose = require("mongoose")
const { Schema } = mongoose
const problemSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requires: true
    },
    difficulty: {
        types: String,
        enum: ["easy", "medium", "haard"],
        required: true
    },
    tages: {
        type: String,
        enum: ['array', "linked ist", "graph", "dp"],
        required: true
    },
    visibleTestvases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            },
            explanation: {
                type: String,
                required: true
            },
        }
    ],
    hiddenTestCase: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    starterCode: [
        {
            language: {
                type: String,

            },
            initialCode: {
                type: String,
                required: true
            }
        }

    ],
    problemCreator: {
        type: Schema.types.ObjectID,
        role: 'user',
        require: true
    }
})


const problem = mongoose.model("pronlem", problemSchema)

moudle.exports = problem;