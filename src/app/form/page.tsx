'use client'
import { ContactForm } from "@/components/ContactForm";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FormPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="text-sm text-gray-500">
            React / Next.js Assessment
          </div>
        </div>

        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                ✓
              </div>
              <div>
                <div className="font-bold">Success!</div>
                <div className="text-sm opacity-90">Form submitted successfully</div>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="ml-4 text-white/80 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <p className="text-blue-200 mb-8 leading-relaxed">
                We'd love to hear from you. Fill out the form and our team will
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-300">Email</div>
                    <div className="font-medium">contact@assessment.dev</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-300">Phone</div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-300">Location</div>
                    <div className="font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-blue-300 mb-2">Response Time</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="font-medium">Typically within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Contact Form</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Send us a Message
                </h1>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                  All fields are required.
                </p>
              </div>

              <ContactForm onSuccess={() => setShowSuccess(true)} />
            </div>

     
          </div>
        </div>
      </div>
    </div>
  );
}