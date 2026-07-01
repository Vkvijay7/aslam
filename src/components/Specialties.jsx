import React from 'react';
import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import BlurText from './BlurText';
import PerspectiveScrollShowcase from './ui/perspective-scroll-showcase';

export default function Specialties() {
  const servicesList = [
    {
      title: 'Structural Skeleton & Foundations',
      category: 'Labour & Engineering',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBM-OFA1L7E5iaG8eL_EBMZQA8xzPw6CQSXjbfzQbxEUCVHzF4yLxYruPClAiFRfeDukETVgJsr2kH6Cyeud7a3uiFkeAh1jh-O7-FUo8A4baw7I-DPd7o8sLyEWCqLsdp0J10b7L8cvIT2N25hzkhk_5wjxyDtb2qcgD4i4IPiOmkWwGGaXgwJgON04N0sXM-idHlawsLVs0Q_WNMHIkkG3Un5EvCQK2hrlmfDeqpOE5fe-MfwtqmHzTOOb9GDoKYSiSd0vo-Pb4',
      features: [
        'Reinforced concrete framework',
        'Structural steel layout engineering',
        'Certified soil & load supervision'
      ],
      isDark: true,
      bgText: 'FOUNDATIONS'
    },
    {
      title: 'Modern elevation & Façade Architecture',
      category: 'Elevation Works',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiWyeLtbXOnXTYfG1eLzmP70_AvgfrWTIJXGDPZPkXGLlxylHmVYm52BEYm2UxT9u8P5J4JEyCsuKtVYjSjLHR3OAhhrVdnR6y2ijuttt_QLEPnz4kYow0ZCQJn9gn7z_WktoZYjIW9dthyseZkocECdtaWt7Soy4GssP8jQJw6z2ba48G-tQ_ohJrnP9UZoeGnOrUiiJGrYo25TbHo3soiXwL6KzS0_NkwhR4XOXbBeX9XwuwzHLN4M82iRaCHwHBDF2pRrv3KPY',
      features: [
        'Stone & composite wood cladding',
        'Structural glass & glazing details',
        'Aesthetic accent exterior lighting'
      ],
      isDark: false,
      bgText: 'ELEVATIONS'
    },
    {
      title: 'Luxury Marble & Tiling Services',
      category: 'Tile Installations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp_5FlGPaOLJDOzG6NXO8Yt4Im2--Hn_f0u3Z_OTekYWqHGcTvddx600-cbn5tzWehL1lXjRPeuVh-bqbR33OFOYbh43UsJc9SNN2Tv-o91NsuoqnPGJDeRf82xWhFtSVkDLg5APAv2pxiKGsYcK55G_TrEjL7BBamFXnBAis-oYGuz3Kj-dgNkxhg3n2eVvuLNzXRECjSO-r9MqW3zYboBzxWE0eNRG0IHfDrndaOfQIvUZUIDGRnkIBkwHX9uK-VPJDZLDfh1q0',
      features: [
        'Premium Italian marble installation',
        'Vitrified & ceramic tile layouts',
        'Flawless level & grout alignment'
      ],
      isDark: true,
      bgText: 'TILING'
    },
    {
      title: 'Premium Interior & Exterior Painting',
      category: 'Decorative Finishes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYCv5eVLEMrjgrFq5DkczVphNwMLYRvxVA-EdOnqkQoN6trIRWmuaL11ZwQSnaa0DYMctH-bq3aQf-1_VwJeQxMmoSMcW5Ab8x3CYA5LsijiOytAE2kZMdQqtnH4KcXdv4vWysUqB0Pk2GWay9vqK5ENRbOxXEgjqFtAV2bMA7RO5jjVitVexuCS7rks95-3-sswTuCw3x_Ad0GWtTblWoP_mo8S6LzLhxX4E27vz2a2TXk1puP-PyIknIqpRjQYVwdpnKvYXRKmU',
      features: [
        'Weatherproof external coatings',
        'Premium matte & gloss emulsions',
        'Waterproofing compound injection'
      ],
      isDark: false,
      bgText: 'PAINTING'
    },
    {
      title: 'Bespoke Interior Carpentry & Woodwork',
      category: 'Interior Execution',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB7m-JXMfnvvea0xka8yGfX4ERTP7FudBJcNMhExUBgFYK57Z22uVqor2yfvrxVVo9UmUm6Yjf1jDAjd5e80tMwdWO3i-pnioKbFZ9f5fD8fLv6IiejP5lQCeo4fPDKspQmpBPR5qFVtJjW1CPRg8bbhVMnX8bQ3L_YFs4VsseVjSqbzcX2zCyzaHHKwB7_db3vyIOQLpQa4nx8_iq0I7dvF49uNDtHuY4V4wWB9mTRJnniWnO_cjl2wjlS-t0gU6JUlYEbr8fitY',
      features: [
        'Custom modular kitchen fit-outs',
        'Architectural gypsum false ceilings',
        'Integrated wardrobe & closet storage'
      ],
      isDark: true,
      bgText: 'CARPENTRY'
    },
    {
      title: 'Bespoke Home & Office Renovations',
      category: 'Remodeling & Consulting',
      image: '/renovation_showcase.png',
      features: [
        'Turnkey restoration of old layouts',
        'Electrical & plumbing modernization',
        'Space planning & optimization'
      ],
      isDark: false,
      bgText: 'RENOVATIONS'
    }
  ];

  return (
    <section className="pt-10 pb-10 md:pt-16 bg-white transition-colors overflow-visible scroll-mt-20 border-b border-black/5" id="specialties">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        {/* Section Header */}
        <div>
          <span className="text-evergreen font-nav-link text-xs uppercase tracking-widest font-semibold block mb-2">
            VISUAL SHOWCASE
          </span>
          <BlurText
            text="SERVICES"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="font-section-heading-mobile text-3xl md:text-5xl text-evergreen uppercase font-extrabold leading-tight"
          />
        </div>
      </div>

      {/* Perspective Scroll Showcase (Full Width) */}
      <div className="w-full overflow-x-clip">
        <PerspectiveScrollShowcase projects={servicesList} />
      </div>
    </section>
  );
}
