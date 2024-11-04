// app/payment/thank-you/page.tsx
import React from 'react';

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100 rounded-lg shadow-lg p-8">
            <h1 className="text-9xl font-bold text-blue-500">Thank You!</h1>
            <p className="mt-4 text-lg">Your order will be delivered in 3 Business days.</p>
        </div>
    );
};

export default ThankYouPage;
