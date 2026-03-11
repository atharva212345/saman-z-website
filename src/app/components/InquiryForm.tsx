import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

interface InquiryFormProps {
  packageName?: string;
}

export function InquiryForm({ packageName }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: packageName ? `Inquiry for ${packageName}` : "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email' : '';
      case 'phone':
        return !/^\+?[0-9]{10,}$/.test(value.replace(/\s/g, '')) ? 'Invalid phone' : '';
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: validateField(field, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'message') {
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      toast.error("Please fix the errors");
      return;
    }
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create WhatsApp message
    const whatsappMessage = `
🌍 *New Inquiry from Samanz Holidays Website*

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
${packageName ? `📦 Package: ${packageName}` : ''}

💬 Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/919226339969?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("✅ Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1E88E5]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#F15A29]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-br from-[#1E88E5] to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <Send className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Send Us an Inquiry
          </h3>
          <p className="text-gray-600">We'll get back to you within 24 hours</p>
        </motion.div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter your name"
              className="mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="your@email.com"
              className="mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className="mt-1"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your travel plans..."
              className="mt-1 min-h-32"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          {isSubmitting ? (
            <motion.div className="flex items-center justify-center">
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Sending...
            </motion.div>
          ) : (
            <motion.div className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Send via WhatsApp
            </motion.div>
          )}
        </Button>
      </div>
    </motion.form>
  );
}