import request from 'superagent'

export const fetchWeatherApi = async () => {
    const {body} = await request.get(
      'https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&APPID=139a21f597a82e543b40b68435fd2220'
    )
    console.log('API - ', body.list)
    return body.list
}