import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

import { QUERY_CLIENT_OPTIONS } from './constants/queryClient';

const App = () => {
    const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_OPTIONS));

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <div className="bg-[#e5e5e5] h-screen flex justify-center items-center p-12">
                <RouterProvider router={router} />
            </div>
        </QueryClientProvider>
    );
};

export default App;
