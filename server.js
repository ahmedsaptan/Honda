const express = require('express')
const cors = require('cors')

const path = require('path')


const cars = [
    {
      url: '../assets/accord.png',
      model: 'ACCORD',
      price: '$31,060',
      bigImage: '../assets/images/accord-sedan.png',
      galary: [
            {
              img: '../assets/images/accord/1.png',
              title: 'Design that Sets the Standard',
              desc: 'Daring yet elegant, the exterior design of the 2020 Accord speaks to its exceptional combination of innovation, efficiency and performance.'
            },
            {
                img: '../assets/images/accord/2.png',
                title: 'A Cutting-Edge Cabin',
                desc: 'From thoughtful ergonomics to an available 8-inch Display Audio touch-screen with Apple CarPlay®* and Android Auto™* integration, the Accord interior is a driver’s paradise.'
            },
            {
                img: '../assets/images/accord/3.png',
                title: 'See the Accord in Action',
                desc: 'Loaded with innovative features, the  Accord is not only the most advanced Accord ever- it’s a truly groundbreaking sedan.'
            }
      ]
    },
    {
      url: '../assets/civic.png',
      model: 'CIVIC',
      price: '$19,060',
      bigImage: '../assets/images/civic-sedan.png',
      galary: [
        {
          img: '../assets/images/civic/1.png',
          title: 'Style for Miles',
          desc: 'The iconic Civic Sedan makes a bold statement everywhere you go with its edgy, sleek styling.'
        },
        {
            img: '../assets/images/civic/2.png',
            title: 'Modern Comfort',
            desc: 'Eye-catching style combines with comfort in an interior that puts advanced technology within reach.'
        },
        {
            img: '../assets/images/civic/3.png',
            title: 'See the Civic Sedan in Action',
            desc: 'Discover why the Civic Sedan is so easy to love, from its thoughtful features to its exciting styling.'
        }
    ]
    },
    {
      url: '../assets/Insight.png',
      model: 'INSIGHT',
      price: '$22,060',
      bigImage: '../assets/images/insight.png',
      galary: [
        {
          img: '../assets/images/insight/1.png',
          title: 'Style Meets Savvy',
          desc: 'Premium looks at an attractive price. And it happens to be a hybrid.'
        },
        {
            img: '../assets/images/insight/2.png',
            title: 'Furnished with Finesse',
            desc: 'The interior of the Insight is thoughtfully designed with roomy seating, elegant leather finishes and expansive cargo space'
        },
        {
            img: '../assets/images/insight/2.png',
            title: 'See the Insight in Action',
            desc: 'Blending refined power, styling and performance, the Insight delivers a driving experience you’ll have to see to believe.'
        }
    ]
    },
    {
      url: '../assets/Clarity Fuel Cell.png',
      model: 'CLARITY-FUEL-CELL',
      price: '$27,060',
      bigImage: '../assets/images/clarity-plug-in-hybrid.png',
      galary: [
        {
          img: '../assets/images/clarity-plug-in-hybrid/1.png',
          title: 'What Is a Plug-In Hybrid?',
          desc: 'An advanced hybrid that lets you drive on electric power alone, or tap into the gas engine for longer drives.'
        },
        {
            img: '../assets/images/clarity-plug-in-hybrid/2.png',
            title: 'What Are the Advantages?',
            desc: 'Save money charging at home, spend less time at the gas station and enjoy the reassurance of a long-lasting, high-voltage battery*.'
        }
    ]
    },
    {
      url: '../assets/Civic Si Sedan.png',
      model: 'CIVIC-SI-SEDAN',
      price: '$25,060',
      bigImage: '../assets/images/civic-si-sedan.png',
      galary: [
        {
          img: '../assets/images/accord/1.png',
          title: 'Stunning Style',
          desc: 'With sleek body lines and racing-inspired details, the Civic Si Sedan radiates an unmistakable attitude.'
        },
        {
            img: '../assets/images/accord/2.png',
            title: 'Settle in for Takeoff',
            desc: 'Level up your driving excitement in a standout cockpit that features a 450-watt audio system, heated front seats and bright red stitching.'
        }
    ]
    },
    {
      url: '../assets/Accord Hybrid.png',
      model: 'ACCORD-HYBRID',
      price: '$25,060',
      bigImage: '../assets/images/accord-sedan.png',
      galary: [
        {
          img: '../assets/images/accord/1.png',
          title: 'Design that Sets the Standard',
          desc: 'Daring yet elegant, the exterior design of the 2020 Accord speaks to its exceptional combination of innovation, efficiency and performance.'
        },
        {
            img: '../assets/images/accord/2.png',
            title: 'A Cutting-Edge Cabin',
            desc: 'From thoughtful ergonomics to an available 8-inch Display Audio touch-screen with Apple CarPlay®* and Android Auto™* integration, the Accord interior is a driver’s paradise.'
        },
        {
            img: '../assets/images/accord/2.png',
            title: 'See the Accord in Action',
            desc: 'Loaded with innovative features, the  Accord is not only the most advanced Accord ever- it’s a truly groundbreaking sedan.'
        }
    ]
    }
  ]

const app = express()

app.use(express.static(__dirname + '/dist/task'))


app.use(cors())

app.get('/api/cars', (req, res) => {
    res.json(cars)
})

app.get('/api/cars/:name', (req, res) => {
    const carName = req.params.name
    const car1 = cars.find((car) => {
        return car.model.toLocaleLowerCase() === carName
    })
    res.json(car1)
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname))
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Runing in port ', PORT)
})