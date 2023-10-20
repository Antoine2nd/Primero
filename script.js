let url="https://api.open-meteo.com/v1/forecast?latitude=-22.905683&longitude=-47.060739&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1"
let temp = document.querySelector("#temp")
let windspeed = document.querySelector("#windspeed")
let uv = document.querySelector("#UV")
let percep = document.querySelector("#Percep")

fetch(url).then((resposta) => resposta.json())
.then((dados) =>{
   temp.innerHTML = dados.daily.temperature_2m_max + "ºC"
     uv.innerHTML = "UV: " + dados.daily.uv_index_max
})
     
