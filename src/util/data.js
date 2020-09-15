import feverLogo from '../assets/images/fever.png'
import coughLogo from '../assets/images/cough.png'
import soreLogo from '../assets/images/sore.png'
import spreadLogo from '../assets/images/spread.png'
import dryCoughLogo from "../assets/images/dryCough.png";
import handsLogo from "../assets/images/hands.png";
import homeLogo from "../assets/images/home.png";
import faceLogo from "../assets/images/face.png";
import noseLogo from "../assets/images/nose.png";

export const spreadList = [
    {
        logo: spreadLogo,
        heading: 'Person-to-person spread',
        detail: 'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    },
    {
        logo: coughLogo,
        heading: 'Person coughs or sneezes',
        detail: 'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.'
    }, {
        logo: soreLogo,
        heading: 'Sore Throat',
        detail: 'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
]


export const symptomsList = [
    {
        logo: feverLogo,
        heading: 'Fever',
        detail: 'High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.'
    },
    {
        logo: soreLogo,
        heading: 'Dry Cough',
        detail: 'Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).'
    }, {
        logo: dryCoughLogo,
        heading: 'Sore Throat',
        detail: 'A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.'
    },
]


export const preventionList = [
    {
        logo: handsLogo,
        heading: 'Wash your hands regularly with soap',
        detail: 'Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.'

    },
    {
        logo: homeLogo,
        heading: 'Stay home if you feel unwell.',
        detail: 'Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care. '

    },
    {
        logo: faceLogo,
        heading: 'Avoid touching your face.',
        detail: 'To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face.'

    },
    {
        logo: noseLogo,
        heading: 'Cover your mouth and nose',
        detail: `Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your.`

    }
]