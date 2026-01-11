import React from 'react';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
/**
 * OverallStatus component
 * Matches the pixel-perfect design of the system status banner.
 * Visual characteristics:
 * - Green background (#22c55e / bg-green-500)
 * - Rounded corners (rounded-lg)
 * - Subtle elevation (shadow-lg)
 * - White checkmark icon
 * - "All Systems Operational" text (Medium weight, 1.125rem font size)
 */
const OverallStatus: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div 
        className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-[#22c55e]"
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            {/* Success Checkmark Icon */}
            <span className="flex p-0.5">
              <svg 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </span>
            <p className="ml-2 font-medium text-lg leading-7 text-white truncate">
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
=======
const OverallStatus = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-0">
      <div className="p-2 mb-8 rounded-lg shadow-lg sm:p-3 bg-green-500">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
>>>>>>> Stashed changes
            {/* Checkmark SVG Icon based on the visual layout */}
            <svg 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <p className="ml-2 font-medium text-lg text-white truncate text-status-banner">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
              All Systems Operational
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallStatus;