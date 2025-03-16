import React from 'react';
import Image from 'next/image';

const LoadingGif: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className=" h-[100px] w-[100px]">
                <Image src="/loading.gif" alt="loading" unoptimized width={300} height={150} className="h-full w-full " />
            </div>
        </div>
    );
};

export default LoadingGif;