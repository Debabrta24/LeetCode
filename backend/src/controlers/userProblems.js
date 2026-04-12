const { getLanguageById, submitBatch } = require("../utilitis/ProblemUtility")
const createProblem = async (req, res) => {
    const { tittle, description, difficulty, tages, visibleTestvases, hiddenTestCase, starterCode, problemCreator } = req.body;

    try {
        for (const { language, completeCode } of refrenceSoution) {



            const languageId = getLanguageById(language)
            const submissions = visibleTestcases.map((testCase) => ({
                source_code: completeCode,
                language_id: languageId,
                stdin: testCase.input,
                expected_output: testCase.output

            }))
            const submitResult = await submitBatch(submissions)
            const resultToken = submitResult.map((value) => value.token)
        const testResult=await submitToken(resultToken)
        }
    }

    catch (err) {

    }

}


