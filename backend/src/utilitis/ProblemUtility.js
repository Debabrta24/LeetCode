const axios = require("axios")
const getLanguageById = (lang) => {
    const language = {
        "c++": 54,
        "java": 62,
        "javascript": 63,
    }
    return language(lang.toLowercase())
}


const submitBatch = async (submissions) => {

}

const submitToken=async(tokens)=>{

}




const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens:resultToken.join(","),
    base64_encoded: 'true',
    fields:'*'
  },
  headers: {
    'x-rapidapi-key': '262d6c1146mshe0d57bd32ed7e56p1631e8jsn86dbe9f839d9',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions: [
      {
        language_id: 46,
        source_code: 'ZWNobyBoZWxsbyBmcm9tIEJhc2gK'
      },
      {
        language_id: 71,
        source_code: 'cHJpbnQoImhlbGxvIGZyb20gUHl0aG9uIikK'
      },
      {
        language_id: 72,
        source_code: 'cHV0cygiaGVsbG8gZnJvbSBSdWJ5IikK'
      }
    ]
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();



module.exports = { getLanguageById, submitBatch ,submitToken};
