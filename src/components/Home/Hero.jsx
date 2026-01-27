function Hero(){
    return (
        <div className="hero-section">
            <div className="grid gap-4 bg-[url(https://fsa2-assets.imgix.net/assets/Legacy-Media-Imports/image1_190330_150225.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=800&ixlib=php-3.3.1&w=800)]  px-10 py-10 ">
                <div className="mt-10 lg:m-15">
                    <h2 className="text-4xl text-white font-bold mb-4">Learn Skills that matters</h2>
                    <h3 className="text-lg mb-6 text-white">Join millions of learners from around the world</h3>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 mr-4 cursor-pointer" onClick={()=>{window.location.href="/signup"}}>Get Started</button>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-md border transition duration-300 cursor-pointer" onClick={()=>{window.location.href="/signin"}}>View Pricing</button>

                </div>
              
            </div>
        </div>
    );
}

export default Hero;