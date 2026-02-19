import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const ref = useRef(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="hero" id="home">
            <div className="container">

                {/* Text Content */}
                <div className="hero-content">
                    <motion.span
                        className="hero-tag"
                        initial={{ opacity: 0, y: 20, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        #1 Flat Booking App
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ perspective: 1000 }}
                    >
                        ঘর খুঁজুন , <br />
                        <motion.span
                            style={{ display: 'inline-block' }}
                            animate={{
                                color: ['#2563EB', '#3B82F6', '#60A5FA', '#2563EB'],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            বাসার চাবি বুঝুন
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Discover verified flats in your area.
                        We connect you directly with owners for a seamless rental experience.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.a href="https://drive.google.com/file/d/1O4t3WtqPe4ZJBom0DW_YdNHW9Y0L78wN/view?usp=share_link" className="btn" whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(37 99 235 / 0.4)" }} whileTap={{ scale: 0.95 }} target="_blank" rel="noopener noreferrer">Download App</motion.a>
                        <motion.a href="#services" className="btn btn-outline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Explore Service</motion.a>
                    </motion.div>
                </div>

                {/* 3D Visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.div
                        className="card-stack"
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <motion.div
                            className="card card-1"
                            style={{ transform: "translateZ(-40px) translateX(-20px) rotate(-6deg)" }}
                        />

                        <motion.div
                            className="card card-2"
                            style={{ transform: "translateZ(40px)" }}
                        >
                            <div className="card-image" style={{ background: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80) center/cover' }}></div>
                            <div className="card-content">
                                <div className="card-title">Modern Apartment</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className="card-price">৳25,000/mo</span>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>2 Beds • 1 Bath</span>
                                </div>
                            </div>

                            {/* Floating Badge Element for extra depth */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    background: 'rgba(255,255,255,0.9)',
                                    padding: '8px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    transform: 'translateZ(60px)'
                                }}
                            >
                                Verified
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
