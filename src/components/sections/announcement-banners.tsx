import React from "react";

/**
 * AnnouncementBanners Component
 * Displays the dual promotional banners at the top of the A4F status page.
 * Includes a muted grey Product Hunt review banner and an orange Ultra Plan update banner.
 */
const AnnouncementBanners: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Product Hunt Banner */}
      <div className="w-full bg-[#f1f5f9] py-2 text-center text-sm border-b border-[#e2e8f0]">
        <p className="max-w-screen-xl mx-auto px-4 font-normal text-[#020817]">
          We are on Product Hunt! It would be great if you could take a moment to{" "}
          <a
            href="https://www.producthunt.com/products/a4f-ai-for-free/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6366f1] hover:underline font-medium"
          >
            review us and show your support
          </a>
          .
        </p>
      </div>

      {/* Ultra Plan Pricing Banner */}
      <div className="w-full bg-[#fff7ed] border-b border-[#fed7aa] py-2 text-center text-sm">
        <p className="max-w-screen-xl mx-auto px-4 text-[#7c2d12]">
          <span className="font-semibold">Ultra Plan Pricing Update:</span> Lock
          in $40/mo (or $336/yr) before it rises to $45/mo soon. Exclusive
          access to Gemini 3, Claude, Grok &amp; GPT Codex.{" "}
          <a
            href="/announcement/2025-11-20-ultra-plan-pricing-update"
            className="text-[#c2410c] hover:underline font-medium"
          >
            Learn more
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanners;