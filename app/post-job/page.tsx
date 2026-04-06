import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PostJobForm from '@/components/ui/PostJobForm';

export default function PostJobPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      
      {/* Hero Section for Post Job */}
      <section className="pt-48 pb-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Hire Top <span className="text-accent">Security</span> Talent.
          </h1>
          <p className="text-xl text-text/70 max-w-2xl mx-auto font-body">
            Post your cybersecurity role and connect with pre-vetted professionals ready to secure your infrastructure.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 bg-black relative z-10">
        <div className="container mx-auto px-6">
          <PostJobForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
