'use client'

import React, { useState } from 'react';
import { SubscriptionButton } from "@/components/subscription-button";

const Pricing = () => {
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  return (
    <div className="flex flex-col items-center justify-center text-center my-1 m-10">
      <h2 className="text-medium font-medium text-emerald-500 mb-2 mt-12">PRICING</h2>
      <h1 className="text-3xl font-bold text-white mb-6">Simple and transparent pricing</h1>
      <p className="text-xl font-semibold text-center mb-12 text-muted-foreground">We have two subscription types: Monthly and Yearly.</p>

      <div className="mb-8 w-70 p-1.5 rounded-lg bg-[#242424] flex items-center justify-around">
        <div 
          className={`p-2 px-6 rounded-lg cursor-pointer ${subscriptionType === 'monthly' ? 'bg-[#505050] text-[#ffffff] font-semibold' : 'text-[#757575] font-semibold'}`} 
          onClick={() => setSubscriptionType('monthly')}
        >
          Monthly
        </div>
        <div 
          className={`p-2 px-8 rounded-lg cursor-pointer ${subscriptionType === 'yearly' ? 'bg-[#505050] text-[#ffffff] font-semibold' : 'text-[#757575] font-semibold'}`} 
          onClick={() => setSubscriptionType('yearly')}
        >
          Yearly
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center mb-20 bg-[#242424] shadow-custom-light rounded-lg p-8">
        <h3 className="text-medium font-semibold text-emerald-500 text-center mb-2">PRO</h3>

        {subscriptionType === 'monthly' ? (
          <h4 className="text-2xl font-bold text-center mb-2 text-white">9,90 EUR per month</h4>
        ) : (
          <div className="flex flex-col items-center justify-center mb-2">
            <div className="flex items-center justify-center">
              <h4 className="text-2xl font-bold text-center text-white">6,90 EUR per month</h4>
              <button className="ml-3 bg-emerald-500 text-white rounded-lg px-2 py-1 h-8 w-30 font-semibold">Save 30%</button>
            </div>
            <p className="text-muted-foreground">Billed Annually</p>
          </div>
        )}

        <hr className="border-emerald-500 w-full mt-8 mb-8 border-t-0.5"/>

        <div className="flex items-center justify-start w-full mt-4 mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="ml-4 text-white">Unlimited use of Cerebrum GPT</p>
        </div>
        <div className="flex items-center justify-start w-full mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="ml-4 text-white">Priority queue for fast rendering</p>
        </div>
        <div className="flex items-center justify-start w-full mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="ml-4 text-white">Access to our exclusive community</p>
        </div>
        <div className="flex items-center justify-start w-full mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="ml-4 text-white">Priority support</p>
        </div>
        <div className="flex items-center justify-start w-full mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="ml-4 text-white">Beta access to new features</p>
        </div>
        <SubscriptionButton isPro={false} />
      </div>
    </div>
  );
}

export default Pricing;
