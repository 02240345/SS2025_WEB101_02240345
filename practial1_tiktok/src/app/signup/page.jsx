'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // In a real app, you would call a registration API here
    console.log('Signup data:', data);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Registration successful (demo only)');
    }, 1500);
  };

  const password = watch('password');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign up for TikTok</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create a profile, follow other accounts, make your own videos, and more
          </p>
        </div>
      </div>
    </div>
  );
}