import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface VisionContainerMovies extends Schema.Component {
  collectionName: 'components_vision_container_movies';
  info: {
    displayName: 'ContainerMovies';
  };
  attributes: {
    movies: Attribute.Relation<
      'vision.container-movies',
      'oneToMany',
      'api::movie.movie'
    >;
  };
}

export interface VisionContainerPrograms extends Schema.Component {
  collectionName: 'components_vision_container_programs';
  info: {
    displayName: 'ContainerPrograms';
  };
  attributes: {
    programs: Attribute.Relation<
      'vision.container-programs',
      'oneToMany',
      'api::program.program'
    >;
  };
}

export interface VisionContainerShow extends Schema.Component {
  collectionName: 'components_vision_container_shows';
  info: {
    displayName: 'ContainerShows';
    description: '';
  };
  attributes: {
    shows: Attribute.Relation<
      'vision.container-show',
      'oneToMany',
      'api::show.show'
    >;
  };
}

export interface VisionContent extends Schema.Component {
  collectionName: 'components_vision_pro_contents';
  info: {
    displayName: 'content';
    icon: 'expand';
    description: '';
  };
  attributes: {
    url: Attribute.String &
      Attribute.DefaultTo<'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'>;
    format: Attribute.String & Attribute.DefaultTo<'mp4'>;
    duration: Attribute.Integer & Attribute.DefaultTo<6480000>;
    height: Attribute.Integer & Attribute.DefaultTo<360>;
    width: Attribute.Integer & Attribute.DefaultTo<640>;
  };
}

export interface VisionCredit extends Schema.Component {
  collectionName: 'components_vision_pro_credits';
  info: {
    displayName: 'credit';
    icon: 'apps';
    description: '';
  };
  attributes: {
    role: Attribute.String;
    name: Attribute.String;
  };
}

export interface VisionImage extends Schema.Component {
  collectionName: 'components_vision_pro_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    imageType: Attribute.Enumeration<
      [
        'cover',
        'thumbnail',
        'banner',
        'logo',
        'backdrop',
        'poster',
        'backdrop_clean',
        'poster_clean'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'poster'>;
    url: Attribute.String;
    templateUrl: Attribute.String;
  };
}

export interface VisionRating extends Schema.Component {
  collectionName: 'components_vision_pro_ratings';
  info: {
    displayName: 'rating';
    icon: 'check';
    description: '';
  };
  attributes: {
    scheme: Attribute.String & Attribute.DefaultTo<'MPAA'>;
    rating: Attribute.String & Attribute.DefaultTo<'PG'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'vision.container-movies': VisionContainerMovies;
      'vision.container-programs': VisionContainerPrograms;
      'vision.container-show': VisionContainerShow;
      'vision.content': VisionContent;
      'vision.credit': VisionCredit;
      'vision.image': VisionImage;
      'vision.rating': VisionRating;
    }
  }
}
