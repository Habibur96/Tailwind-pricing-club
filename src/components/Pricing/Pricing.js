import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benifits: [
                'lifetime free',
                'Unlimited deals',
                'localized deals',
                'fantastic deals',
                'creazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benifits: [
                'Everything on free',
                'Unlimited deals',
                'localized deals',
                'fantastic deals',
                'creazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            benifits: [
                'Everything on regular',
                'Unlimited deals',
                'localized deals',
                'fantastic deals',
                'creazy deals'
            ]
        }

    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-whilt'>Best deals of the Town
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, alias minima eligendi eveniet, molestiae nulla laudantium incidunt consequuntur porro unde quo, amet laborum mollitia neque expedita nisi qui officia dignissimos.</p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option =>
                        <PricingOption
                            key={option.id}
                            option={option}>

                        </PricingOption>)
                }
            </div>
        </div>


    );
};

export default Pricing;