import React from "react";


function  Api()
{
    const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://opentdb.com/api.php?amount=10`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { loading, data };
}
// const fetchQuestions=async()=>
// {
//     try{
//         const data=await(axios.get(`https://opentdb.com/api.php?amount=10`))
//         // console.log(data);
//         setQuestions(data.data.value);   
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
    
// }

export default Api;