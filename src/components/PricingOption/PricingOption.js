import { ArrowRightIcon, CheckCircleIcon, TicketIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const { name, price, benifits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>

            <h2 className='bg-indigo-300 py-2 text-xl rounded font-bold'>Name: {name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>mo/</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left'>Benifits:</h3>

                {
                    benifits.map(benefit => <Benifit
                        benefit={benefit}>

                    </Benifit>)
                }


            </div>

            <button className='bg-green-500 flex justify-center w-full py-2 rounded mt-6 text-white hover:text-green-700 font-bold'>Buy now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon> </button>

        </div>
    );
};

export default PricingOption;