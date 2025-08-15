using Microsoft.AspNetCore.Mvc;

namespace WeatherApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetWeather()
        {
            var weather = new {
                temperature = 25,
                condition = "Sunny"
            };
            return Ok(weather);
        }
    }
}
