const windDirections = [
    {
        code: 'N',
        direction: 'North',
        deg: 11.25
    },
    {
        code: 'NNE',
        direction: 'North-Northeast',
        deg: 33.75
    },
    {
        code: 'NE',
        direction: 'Northeast',
        deg: 56.25
    },
    {
        code: 'ENE',
        direction: 'East-Northeast',
        deg: 78.75
    },
    {
        code: 'E',
        direction: 'East',
        deg: 101.25
    },
    {
        code: 'ESE',
        direction: 'East-Southeast',
        deg: 123.75
    },	
	{
        code: 'SE',
        direction: 'Southeast',
        deg: 146.25
    },	
	{
        code: 'SSE',
        direction: 'South-Southeast',
        deg: 168.75
    },	
	{
        code: 'S',
        direction: 'South',
        deg: 191.25
    },	
	{
        code: 'SSW',
        direction: 'South-Southwest',
        deg: 213.75
    },	
	{
        code: 'SW',
        direction: 'Southwest',
        deg: 236.25
    },	
	{
        code: 'WSW',
        direction: 'West-Southwest',
        deg: 258.75
    },
	{
        code: 'W',
        direction: 'West',
        deg: 281.25
    },	
	{
        code: 'WNW',
        direction: 'West-Northwest',
        deg: 303.75
    },	
	{
        code: 'NW',
        direction: 'Northwest',
        deg: 326.25
    },	
	{
        code: 'NNW',
        direction: 'North-Northwest',
        deg: 348.75
    }
]

const getWindDirection = deg => {
    for (let i = 0; i < windDirections.length; i ++) {
        if (deg < windDirections[i].deg) {
            return windDirections[i].direction
        }
    }
    return 'North'
}

export { getWindDirection }