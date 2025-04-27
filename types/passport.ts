export interface PassportEvent {
  id: string;
  image_url: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Partner {
  display_name: string;
  profile_image: string;
}

export interface PassportData {
  passport: {
    name: string;
    description: string;
    events: PassportEvent[];
    partner: Partner;
  };
}
