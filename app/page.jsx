import React from 'react'
import Image from 'next/image';
export const Home = () => {
    return (
        <section className='page'>
            <div className='header'>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Links</li>
                        <li>About</li>
                    </ul>
                </nav>
                <section className='logo'>
                    {/* <Image
                        src="/assets/icons/logo.png"
                        alt='lores'
                        width={90}
                        height={90}
                        className='logo'
                    /> */}
                    <h1>VOORIVEX</h1>
                </section>
            </div>


            <section className='banner'>
                <div className='text-box'>
                    <div className="timeline">
                        <div className="bullet"></div>
                        <a aria-label="Go to next section" className="scroll-bottom scale-hover">
                        </a>
                    </div>
                    <p>Hi, We are Hunter</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facere. Commodi, aut dolorum excepturi ex eius, dolorem aliquid fuga nihil iusto corporis ipsam id nulla quidem numquam alias omnis sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facere. Commodi, aut dolorum excepturi ex eius</span>
                </div>
            </section>
        </section>
    )
}



export default Home;