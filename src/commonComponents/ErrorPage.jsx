import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';

const ErrorPage = () => {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
      await controls.start({
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 2 }
      });
    };
    sequence();
  }, [controls]);

  const handleNavigateBtn = () => {
    navigate(-1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      {/* Animated 404 Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className="text-center mb-8"
      >
        <h1 className="text-9xl font-bold text-gray-800 relative">
          4
          <motion.span
            animate={{
              rotate: [0, 10, -10, 0],
              transition: { repeat: Infinity, duration: 3 }
            }}
            className="inline-block text-pink-600"
          >
            0
          </motion.span>
          4
        </h1>
      </motion.div>

      {/* Error Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back to shopping!
        </p>
      </motion.div>

      {/* Animated Fashion Elements */}
      <div className="relative w-full max-w-md h-40 mb-10">
        <motion.div
          animate={{
            x: [-50, 50, -50],
            transition: { repeat: Infinity, duration: 8, ease: "linear" }
          }}
          className="absolute top-0 left-1/2"
        >
          <FiShoppingBag className="text-4xl text-pink-500" />
        </motion.div>

        <motion.div
          animate={{
            x: [50, -50, 50],
            transition: { repeat: Infinity, duration: 10, ease: "linear", delay: 1 }
          }}
          className="absolute bottom-0 left-1/2"
        >
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </motion.div>
      </div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <NavLink
          to=""
          onClick={handleNavigateBtn}
          className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-colors shadow-lg"
        >
          <FiArrowLeft className="mr-2" />
          Back to Homepage
        </NavLink>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
        className="absolute top-1/4 left-1/6 opacity-30"
      >
        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [-15, 0, -15],
          transition: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
        }}
        className="absolute bottom-1/4 right-1/6 opacity-30"
      >
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default ErrorPage;