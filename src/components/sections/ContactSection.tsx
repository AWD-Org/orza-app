'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Container from '../layout/Container'
import SectionTitle from '../common/SectionTitle'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { contactFormSchema } from '@/lib/validations'
import type { ContactFormData } from '@/types'

interface ContactSectionProps {
    className?: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form data:', data)

            // Reset form after successful submission
            reset()

            // You could add a toast notification here
            alert('Message sent successfully!')
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Error sending message. Please try again.')
        }
    }

    return (
        <section
            id="contact"
            className={cn(
                "py-16",
                className
            )}
        >
            <Container>
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle variant="centered">Contact Us</SectionTitle>
                    </motion.div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Input
                                    {...register('name')}
                                    placeholder="Your Name"
                                    className={cn(
                                        errors.name && "border-red-500 focus-visible:ring-red-500"
                                    )}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Input
                                    {...register('email')}
                                    type="email"
                                    placeholder="Your Email"
                                    className={cn(
                                        errors.email && "border-red-500 focus-visible:ring-red-500"
                                    )}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Textarea
                                {...register('message')}
                                placeholder="Your Message for ORZA"
                                rows={6}
                                className={cn(
                                    errors.message && "border-red-500 focus-visible:ring-red-500"
                                )}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1 font-space-grotesk">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="text-center">
                            <Button
                                type="submit"
                                size="lg"
                                isLoading={isSubmitting}
                                className="w-full md:w-auto px-12"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </div>
                    </motion.form>
                </div>
            </Container>
        </section>
    )
}

export default ContactSection
