import React, { ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

const FrontendLayout = ({
    children
}: { children: ReactNode }) => {
    return (
        <div>
            <Header></Header>
            <div className='mt-10'>

                {
                    children
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FrontendLayout;