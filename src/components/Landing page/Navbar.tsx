import React from 'react';
import { motion } from "framer-motion";

const Navbar = (): JSX.Element => {
    return (
        <div className='w-4/5 m-auto flex justify-between items-center py-5'>
        <h1 className='text-xl font-bold'>Preciso</h1>
        <motion.ul 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3, staggerChildren: 0.1}}

        className='flex items-center space-x-5'>
            <motion.li
            whileHover={{scale:1.1}} whileTap={{scale: 0.95}}
            ><a href="">Prot</a></motion.li>
            <motion.li
            whileHover={{scale:1.1}} whileTap={{scale: 0.95}}
            ><a href="">Prot</a></motion.li>
            <motion.li
            whileHover={{scale:1.1}} whileTap={{scale: 0.95}}
            ><a href="">Prot</a></motion.li>
            <motion.li
            whileHover={{scale:1.1}} whileTap={{scale: 0.95}}
            ><a href="">Prot</a></motion.li>
        </motion.ul>

        <motion.button 
        whileHover={{ scale:1.2 }}
        whileTap={{ scale:0.9 }}
        className='px-5 py-2 border-black border-2 boder-black font-semibold rounded-full hover:bg-black hover:text-white duration-300'>Register</motion.button>
        {/* <button className='px-5 py-2 border boder-black font-semibold rounded-full hover:bg-black'>Login</button> */}
        </div>
    );
}
// #endregion

export default Navbar;