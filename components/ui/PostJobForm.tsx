'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const jobSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  requirements: z.string().min(20, 'Requirements must be at least 20 characters'),
  salaryMin: z.string().regex(/^\d+$/, 'Must be a number'),
  salaryMax: z.string().regex(/^\d+$/, 'Must be a number'),
  companyName: z.string().min(2, 'Company name is required'),
  companyWebsite: z.string().url('Must be a valid URL'),
  companyLogo: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

type JobFormValues = z.infer<typeof jobSchema>;

export default function PostJobForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: JobFormValues) => {
    setError(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Job Posted:', data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface2 border border-accent/20 p-12 rounded-2xl text-center max-w-2xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-accent" />
        </div>
        <h2 className="text-3xl font-display font-bold text-white mb-4">Job Posted Successfully!</h2>
        <p className="text-text/70 mb-8">
          Your listing is now live and being matched with top cybersecurity talent.
        </p>
        <MagneticButton variant="solid" onClick={() => setIsSubmitted(false)}>
          Post Another Job
        </MagneticButton>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-surface2 border border-white/5 p-8 md:p-12 rounded-2xl">
        <div className="grid grid-cols-1 gap-8">
          {/* Job Title */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-accent uppercase tracking-widest">Job Title</label>
            <input
              {...register('title')}
              placeholder="e.g. Senior SOC Analyst"
              className={`w-full bg-black border ${errors.title ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
            />
            {errors.title && <p className="text-crimson text-xs font-mono mt-1">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-accent uppercase tracking-widest">Job Description</label>
            <textarea
              {...register('description')}
              placeholder="Describe the role and responsibilities..."
              rows={5}
              className={`w-full bg-black border ${errors.description ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body resize-none`}
            />
            {errors.description && <p className="text-crimson text-xs font-mono mt-1">{errors.description.message}</p>}
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-accent uppercase tracking-widest">Requirements</label>
            <textarea
              {...register('requirements')}
              placeholder="List certifications, skills, and experience needed..."
              rows={5}
              className={`w-full bg-black border ${errors.requirements ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body resize-none`}
            />
            {errors.requirements && <p className="text-crimson text-xs font-mono mt-1">{errors.requirements.message}</p>}
          </div>

          {/* Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-mono text-accent uppercase tracking-widest">Min Salary (USD)</label>
              <input
                {...register('salaryMin')}
                placeholder="e.g. 80000"
                className={`w-full bg-black border ${errors.salaryMin ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
              />
              {errors.salaryMin && <p className="text-crimson text-xs font-mono mt-1">{errors.salaryMin.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-accent uppercase tracking-widest">Max Salary (USD)</label>
              <input
                {...register('salaryMax')}
                placeholder="e.g. 120000"
                className={`w-full bg-black border ${errors.salaryMax ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
              />
              {errors.salaryMax && <p className="text-crimson text-xs font-mono mt-1">{errors.salaryMax.message}</p>}
            </div>
          </div>

          <div className="h-[1px] bg-white/5 my-4" />

          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-white">Company Information</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-accent uppercase tracking-widest">Company Name</label>
              <input
                {...register('companyName')}
                placeholder="Your Company Name"
                className={`w-full bg-black border ${errors.companyName ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
              />
              {errors.companyName && <p className="text-crimson text-xs font-mono mt-1">{errors.companyName.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-mono text-accent uppercase tracking-widest">Website URL</label>
                <input
                  {...register('companyWebsite')}
                  placeholder="https://company.com"
                  className={`w-full bg-black border ${errors.companyWebsite ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
                />
                {errors.companyWebsite && <p className="text-crimson text-xs font-mono mt-1">{errors.companyWebsite.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-accent uppercase tracking-widest">Logo URL (Optional)</label>
                <input
                  {...register('companyLogo')}
                  placeholder="https://company.com/logo.png"
                  className={`w-full bg-black border ${errors.companyLogo ? 'border-crimson' : 'border-white/10'} rounded-none px-6 py-4 text-white placeholder:text-text/20 focus:outline-none focus:border-accent transition-all font-body`}
                />
                {errors.companyLogo && <p className="text-crimson text-xs font-mono mt-1">{errors.companyLogo.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-3 p-4 bg-crimson/10 border border-crimson/20 text-crimson rounded-lg">
            <AlertCircle size={20} />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="pt-6">
          <MagneticButton 
            type="submit" 
            variant="solid" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Posting Listing...' : 'Post Job Listing'}
          </MagneticButton>
        </div>
      </form>
    </div>
  );
}
