"use client";

export default function AboutDeskEmbed() {
  return (
    <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden bg-transparent rounded-3xl flex justify-center">
      <iframe
        title="Gaming Setup"
        className="absolute -top-14 h-[calc(100%+7rem)] w-full max-w-none"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/8a75c64542c14be0ad3dcf75423eda0d/embed?autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_help=0&ui_settings=0&ui_stop=0&ui_hint=0&ui_inspector=0&ui_watermark=0&ui_watermark_link=0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
