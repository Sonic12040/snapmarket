import React from "react";


// const Button = () => 
//     <div>
//         <div className="button-1"></div>
//     </div>




// const waysToPay = ({Payments}) => (
//     <div>
//       {Payments.map(Payment => (
//         <div className="Payments" key={Payment.call}>{Payment.call}</div>
//       ))}
//     </div>



//   ); 

const Payments = [
    {
        name: 'WIC',
    },

    {
        name: 'WIC SNAP',
    },
    {
        name: 'SNAP',
    },
    {
        name: 'SFMNP',
    }

]

const Button = (Payment) => {
    return (
      <div>
        {Payments.map(Payment => {
          return <div>{Payment}</div>
        })}
      </div>
    )
  }

// .map( ( {name} ) => {
//     return <Button key={Payments.name} />
// })


// .map((Payments, index) => {
//     return (
//         <Button key={`${Payments.name}`}>
//             {Payments.name}
//         </Button>
//     );
// })






  


export default Button;
