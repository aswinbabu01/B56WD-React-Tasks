import './App.css'
import './Cards'
import Cards from './Cards'
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function App() {
  // Details in JSON Format


  let data = [
    {
      planName: "FREE",
      price: 0,

      feature: [
        {
          name: "Single User",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Community access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: false,
        },
        {
          name: "Dedicated Private Support",
          enabled: false,
        },
        {
          name: "Free Subdomain",
          enabled: false,
        },
        {
          name: "Monthly status Reports",
          enabled: false,
        },
      ]
    },

    {
      planName: "PLUS",
      price: 9,
      feature: [
        {
          name: "5 Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Community access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Private Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly status Reports",
          enabled: false,
        },
      ]
    },
    {
      planName: "PRO",
      price: 29,
      feature: [
        {
          name: "Unlimited Users",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "Community access",
          enabled: true,
        },
        {
          name: "Unlimited Private Projects",
          enabled: true,
        },
        {
          name: "Dedicated Private Support",
          enabled: true,
        },
        {
          name: "Free Subdomain",
          enabled: true,
        },
        {
          name: "Monthly status Reports",
          enabled: true,
        },
      ]
    },

  ]


  // Extracting The JSON format using Map function


  return (
    <div className='container my-5'>
      <div className='row '>
        {
          data.map((item, index) => {
            return <Cards item={item} key={index} />;
          })}
      </div>
    </div>
  )
}

export default App
