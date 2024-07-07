import deck1 from "../images/deck1.jpg"
import deck2 from "../images/deck2.jpg"
import deck3 from "../images/deck3.jpg"
import remodel1 from "../images/remodel1.jpg"
import remodel2 from "../images/remodel2.jpg"
import remodel3 from "../images/remodel3.jpg"
import tile1 from "../images/tile1.jpg"

export const businessEmail = `your-email@example.com`
export const services = [
    {
        title: 'Decking',
        images: [
            {
                src: deck1,
                alt: 'Weatherproof immitation wood deck with lighting and masonry work.'
            },
            {
                src: deck2,
                alt: 'Beachfront wooden deck with railings.'
            },
            {
                src: deck3,
                alt: 'Weatherproof immitation wood deck with railings.'
            },
        ]
    },
    {
        title: 'Remodel',
        images: [
            {
                src: remodel1,
                alt: 'Kitchen cabinet, flooring and countertop remodel.',
            },
            {
                src: remodel2,
                alt: '',
            },
            {
                src: remodel3,
                alt: '',
            }
        ]
    },
    {
        title: 'Tile/Flooring',
        images: [
            {
                src: tile1,
                alt: 'Precise tile layout for best asthetic look.',
            }
        ]
    }
]
