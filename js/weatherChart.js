function getFahrenheits(result){
  return result.hourly_forecast.map(function(item){
    return item.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(function(item){
    return item.FCTTIME['hour']
  })

}

function generateDataSet(labels, returnedData) {
  // Your code goes here
  const dataset =  {
    labels: labels,
    datasets: [{
      label: "My weather chart",
      backgroundColor: 'rgb(255,99,132)',
      data: returnedData,
    }]
  }
  return dataset;
}

function makeRequest(endpoint, success) {
  return fetch(endpoint)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    console.log(getHours(json))
    console.log(getFahrenheits(json))
    success(json)
  });
}
