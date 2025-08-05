'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Container from '../layout/Container'
import Logo from '../common/Logo'

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ]

    const navLinks = [
        { label: 'Products', href: '#products' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Cases', href: '#cases' },
        { label: 'Company', href: '#company' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="relative mt-16 bg-gradient-to-tr from-[#1C4AF2] to-[#1536B9] text-white">
            <Container className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Logo & Description */}
                    <div className="space-y-4 text-left">
                        <Logo className="h-10 text-white" />
                        <p className="text-lg leading-relaxed max-w-sm">
                            ORZA Tech is your partner in intelligent automation — empowering
                            industries with scalable robotics solutions that drive efficiency
                            and innovation.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-start text-left md:items-center md:text-center">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-lg">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="hover:underline hover:text-[#FBFBFB]/80 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social + Contact */}
                    <div className="flex w-full flex-col items-start space-y-4 md:items-end">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold mb-2 text-left md:text-right">
                                Follow Us
                            </h3>
                            <div className="flex justify-start space-x-4 md:justify-end">
                                {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        className="p-3 bg-white rounded-full text-[#1C4AF2] hover:bg-[#FBFBFB] hover:text-[#1536B9] transition-colors"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-1 text-left md:text-right">
                            <a href="mailto:info@orzatech.com" className="text-lg hover:underline">
                                info@orzatech.com
                            </a>
                            <br />
                            <a href="tel:+1234567890" className="text-lg hover:underline">
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom credits */}
                <div className="mt-12 border-t border-white/20 pt-6 flex flex-col items-start md:flex-row md:justify-between text-sm">
                    <div className="mb-2 md:mb-0 text-left">
                        © 2024 ORZA Tech. All rights reserved.
                    </div>
                    <div className="text-left md:text-right">
                        Desarrollado por{' '}
                        <a
                            href="https://www.amoxtli.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold underline hover:text-[#FBFBFB]/80"
                        >
                            Amoxtli Web Developers
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
