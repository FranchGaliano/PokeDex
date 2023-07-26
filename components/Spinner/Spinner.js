import Image from 'next/image';
import React from 'react';
import "./spinner.css";

const Spinner = () => {
  return (
    <Image src="./Poke_Ball_icon.svg" width={80} height={80} alt="Spinner" id="spinner" />
  )
}

export default Spinner