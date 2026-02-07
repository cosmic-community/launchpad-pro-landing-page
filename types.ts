// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// File metafield type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Landing Page Settings (singleton)
export interface LandingPageSettings extends CosmicObject {
  metadata: {
    product_name: string;
    headline: string;
    subheadline?: string;
    hero_image?: CosmicFile;
    cta_button_text: string;
    cta_button_url?: string;
    social_proof_text?: string;
    footer_text?: string;
  };
}

// Feature object
export interface Feature extends CosmicObject {
  metadata: {
    feature_title: string;
    description: string;
    icon_emoji?: string;
    display_order?: number;
  };
}

// Testimonial object
export interface Testimonial extends CosmicObject {
  metadata: {
    customer_name: string;
    role?: string;
    quote: string;
    avatar?: CosmicFile;
    rating?: number;
  };
}