import React from "react";

import { Logos } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={Logos} alt='Logos' className='w-48 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/arshad0220/OpenSummarizeAI", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Unlock Instant Clarity: Streamline your reading with OpenSummarizeAI! 
      Paste your article link and access concise summaries in seconds.
      </h2>
    </header>
  );
};

export default Hero;
