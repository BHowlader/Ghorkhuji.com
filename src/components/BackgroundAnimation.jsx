import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
    return (
        <div className="background-animation">
            <motion.div
                className="blob blob-1"
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -100, 100, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-2"
                animate={{
                    x: [0, -150, 150, 0],
                    y: [0, 100, -100, 0],
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-3"
                animate={{
                    x: [0, 80, -80, 0],
                    y: [0, 80, -80, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export default BackgroundAnimation;
