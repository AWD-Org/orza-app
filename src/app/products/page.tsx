import { ProductsPage } from '@/components/pages/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - ORZA Tech',
  description: 'Explore our comprehensive range of robotic solutions including robotic arms, end effectors, vision systems, and control units.',
  keywords: 'robotics, automation, robotic arms, industrial robots, ORZA Tech products',
}

export default function Products() {
  return <ProductsPage />
}
