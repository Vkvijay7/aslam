import React, { useRef, useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import './Showcase.css';

// Placeholder data used when Supabase isn't configured or has no items
const PLACEHOLDER_ITEMS = [
  {
    id: 'p1',
    title: 'Modern Villa Exterior',
    description: 'A stunning contemporary villa featuring clean lines, floor-to-ceiling glass, and premium stone cladding — built by MA Square Construction.',
    image_url: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
  },
  {
    id: 'p2',
    title: 'Luxury Interior Design',
    description: 'Sophisticated interiors blending warm wood tones with modern minimalism, showcasing our attention to every detail.',
    image_url: 'https://i.redd.it/tc0aqpv92pn21.jpg',
  },
  {
    id: 'p3',
    title: 'Grand Entrance',
    description: 'An architectural masterpiece with soaring ceilings and bespoke lighting — precision-crafted for lasting impressions.',
    image_url: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
  },
  {
    id: 'p4',
    title: 'Skyline Residence',
    description: 'Premium high-rise construction with panoramic views, smart-home integration, and earthquake-resistant engineering.',
    image_url: 'https://images7.alphacoders.com/878/878663.jpg',
  },
  {
    id: 'p5',
    title: 'Urban Living Spaces',
    description: 'Modern urban developments designed for comfort and community — where architecture meets sustainable living.',
    image_url: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
  },
  {
    id: 'p6',
    title: 'Heritage Renovation',
    description: 'Preserving history while integrating modern amenities — a delicate balance of old-world charm and new-age engineering.',
    image_url: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
  },
];

export default function Showcase() {
  const sliderRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── Fetch showcase items from Supabase ──
  useEffect(() => {
    const fetchItems = async () => {
      if (!supabase) {
        setItems(PLACEHOLDER_ITEMS);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('showcase_items')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems(PLACEHOLDER_ITEMS);
        }
      } catch (err) {
        console.warn('[Showcase] Failed to fetch from Supabase, using placeholders:', err.message);
        setItems(PLACEHOLDER_ITEMS);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // ── Slider navigation ──
  const handleNext = useCallback(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      slider.appendChild(slider.children[0]);
    }
  }, []);

  const handlePrev = useCallback(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      slider.prepend(slider.children[slider.children.length - 1]);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (loading) {
    return (
      <section id="showcase" className="h-screen w-full bg-black flex items-center justify-center">
        <div className="animate-pulse text-white/50 font-outfit text-sm uppercase tracking-widest">
          Loading Showcase...
        </div>
      </section>
    );
  }

  // Need at least 3 items for the slider to look right; pad with duplicates if needed
  let displayItems = [...items];
  while (displayItems.length < 6) {
    displayItems = [...displayItems, ...items];
  }
  displayItems = displayItems.slice(0, Math.max(6, items.length));

  return (
    <section id="showcase" className="relative w-full scroll-mt-20">
      {/* Section Header */}
      <div className="bg-white pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
          <ScrollReveal direction="left" delay={0.1}>
            <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">
              OUR GALLERY
            </span>
            <BlurText
              text="SHOWCASE"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="font-section-heading-mobile md:text-5xl text-[#120F17] uppercase font-extrabold"
            />
            <p className="font-paragraph text-sm md:text-base text-black/60 mt-3 max-w-lg leading-relaxed">
              Browse through our finest construction projects — from premium villas to modern commercial spaces.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Cinematic Slider */}
      <div className="showcase-section h-[70vh] md:h-[85vh] relative overflow-hidden">
        <div className="showcase-slider-wrapper">
          <ul className="slider" ref={sliderRef}>
            {displayItems.map((item, index) => (
              <li
                className="item"
                key={`${item.id}-${index}`}
                style={{ backgroundImage: `url('${item.image_url}')` }}
              >
                <div className="content">
                  <h2 className="title">{item.title}</h2>
                  <p className="description">{item.description}</p>
                  <button onClick={() => {
                    const el = document.getElementById('contact-us');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Contact Us
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <nav className="showcase-nav">
            <button className="btn prev" onClick={handlePrev} aria-label="Previous slide">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <button className="btn next" onClick={handleNext} aria-label="Next slide">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
