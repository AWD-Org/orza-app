'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ProductsSection from '@/components/sections/ProductsSection'
import SolutionsSection from '@/components/sections/SolutionsSection'
import CTASection from '@/components/sections/CTASection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StatsSection from '@/components/sections/StatsSection'
import ContactSection from '@/components/sections/ContactSection'

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">


            <main className="
        flex-1
        px-4        /* móvil: 1rem */
        sm:px-6     /* >640px: 1.5rem */
        md:px-8     /* >768px: 2rem */
        lg:px-20    /* >1024px: 5rem */
        xl:px-[160px] /* >1280px: 10rem */
      ">
                <Header />
                <HeroSection />
                <AboutSection />
                <ProductsSection />
                <SolutionsSection />
                <CTASection />
                <TestimonialsSection />
                <StatsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    )
}

export default LandingPage
