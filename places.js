function makeMarkup(data){
    return `
        <div class="item">
            <a href="${data.url}" target=none>${data.name}</a>
            <p>${data.description}</p>
        </div>
    `
}

function render(){
    var $el = $('#container');
    for(var i = 0; i < items.length; i++){
        $el.append(makeMarkup(items[i]));
    }
}

var items = [
    {
        url: "https://www.google.com/maps/place/Mount+Pollux+Trail,+Amherst,+MA+01002/@42.3289089,-72.5045255,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89e6d273e4f0f865:0xa0d6586089148e05!2sUniversity+of+Massachusetts+Amherst!3b1!8m2!3d42.3911569!4d-72.5267121!3m4!1s0x89e6ce36d1661307:0x415c4e8f2c098668!8m2!3d42.328905!4d-72.5023378?hl=en",
        name: "Mount Pollux",
        description: "A small hill that is nevertheless high enough to give you a beautiful 360 degree view of the entire valley."
    },
    {
        url: "https://www.google.com/maps/place/Norwottuck+Rail+Trail,+Amherst,+MA+01002/@42.3572388,-72.5069107,17z/data=!3m1!4b1!4m5!3m4!1s0x89e6ce091648ca57:0xd66c538601707aa7!8m2!3d42.3572349!4d-72.504722?hl=en",
        name: "Norwottuck Rail Trail",
        description: "A beautiful bike path through woods and wetlands. This parking area also has an entrance to the Emily Dickinson trail."
    },
    {
        url: "https://www.google.com/maps/place/The+Moan+%26+Dove/@42.3405955,-72.5217269,17z/data=!3m1!4b1!4m5!3m4!1s0x89e6ce2084d80cb3:0x9fe65731eaaff9ce!8m2!3d42.3405916!4d-72.5195382!6m1!1e1?hl=en",
        name: "The Moan & Dove",
        description: "A small dimly lit bar with a huge selection of international beers and unlimited peanuts."
    },
    {
        url: "https://www.google.com/maps/place/Rattlesnake+Gutter/@42.4739923,-72.5057863,15z/data=!3m1!4b1!4m5!3m4!1s0x89e1328aaa7b6deb:0x4a42d18969ff4b!8m2!3d42.4739774!4d-72.4970315?hl=en",
        name: "Rattlesnake Gutter",
        description: "An old road on the edge of a gorge between two mountains. Moss covered rocks and rivulets abound in this quiet natural sanctuary."
    },
    {
        url: "https://www.google.com/maps/place/Peace+Pagoda/@42.4981388,-72.4964491,17z/data=!3m1!4b1!4m5!3m4!1s0x89e1323c79d65a19:0xaac85392ad78907!8m2!3d42.4981349!4d-72.4942604!6m1!1e1?hl=en",
        name: "Peace Pagoda",
        description: "A buddhist temple on a mountain... nuff said."
    },
    {
        url: "https://www.google.com/maps/place/The+Montague+Bookmill/@42.5379357,-72.5394285,17z/data=!3m1!4b1!4m5!3m4!1s0x89e12e3dfc4550cb:0x1aa87a9d9e7a615c!8m2!3d42.5379318!4d-72.5372398!6m1!1e1?hl=en",
        name: "The Montague Bookmill",
        description: "A used bookstore with a restaurant and cafe in an old mill building. Comfortable chairs next to windows with waterfall views make this one of the best spots to enjoy life and perhaps a new book."
    },
    {
        url: "https://www.google.com/maps/place/Amethyst+Brook+Conservation+Area/@42.3753334,-72.4877799,16z/data=!4m13!1m7!3m6!1s0x89e12e3dfc4550cb:0x1aa87a9d9e7a615c!2sThe+Montague+Bookmill!3b1!8m2!3d42.5379318!4d-72.5372398!3m4!1s0x0:0x5fb48ef20aa95e3a!8m2!3d42.3781508!4d-72.4864653!6m1!1e1?hl=en",
        name: "Amethyst Brook Conservation",
        description: "Just a nice forest to walk in with rivers and hemlock groves."
    },
    {
        url: "https://www.google.com/maps/place/Flayvors+of+Cook+Farm/@42.3325119,-72.5764525,14z/data=!4m8!1m2!2m1!1sice+cream!3m4!1s0x0:0x9a4deea083818b37!8m2!3d42.3295564!4d-72.5498325!6m1!1e1?hl=en",
        name: "Flayvors of Cook Farm",
        description: "Fresh icecream on a dairy farm with a variety of great flavors."
    },
    {
        url: "https://www.google.com/maps/place/House+of+Teriyaki+Japanese+Restaurant/@42.4099369,-72.5319493,17z/data=!4m8!1m2!2m1!1sice+cream!3m4!1s0x0:0xc0c2ee566a9f8a4d!8m2!3d42.4095488!4d-72.5305226!6m1!1e1?hl=en",
        name: "House of Teriyaki",
        description: "Excellent Japanese food, great sushi."
    },
    {
        url: "https://www.google.com/maps/place/Mount+Holyoke+College/@42.2526408,-72.5805295,15z/data=!4m8!1m2!2m1!1sice+cream!3m4!1s0x0:0xd780a40fcad07742!8m2!3d42.2579405!4d-72.5763917!6m1!1e1?hl=en",
        name: "Mount Holyoke College",
        description: "Mount Holyoke has a beautiful campus. Keep an eye out for events that would justify the trip."
    },
    {
        url: "https://www.google.com/maps/place/Mount+Sugarloaf+State+Reservation/@42.4715257,-72.5940965,15z/data=!4m5!3m4!1s0x0:0x292b32dd3c919fee!8m2!3d42.481466!4d-72.5878716!6m1!1e1?hl=en",
        name: "Mount Sugarloaf",
        description: "The top of Mount Sugarloaf is a great hike and the top has a staggering view of the valley."
    },
    {
        url: "https://www.google.com/maps/place/Mike's+Maze/@42.4548096,-72.5924228,15z/data=!4m5!3m4!1s0x0:0x5ddaa4505641b2a1!8m2!3d42.4617391!4d-72.5822952!6m1!1e1?hl=en",
        name: "Mike's Maze",
        description: "If you've never been to a corn maze before you're got to visit Mike's Maze!"
    }
]
