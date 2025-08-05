export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user'
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

// Component specific types
export interface ProductData {
  id: string
  name: string
  description: string
  image: string
  category?: string
}

export interface SolutionData {
  id: string
  title: string
  description: string
  icon: string
}

export interface TestimonialData {
  id: string
  title: string
  content: string
  image: string
  company?: string
}

export interface StatData {
  id: string
  label: string
  value: string
  description?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Component prop types
export interface SectionTitleProps {
  children: React.ReactNode
  variant?: 'default' | 'large' | 'centered'
  className?: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'bordered' | 'elevated' | 'transparent'
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}
