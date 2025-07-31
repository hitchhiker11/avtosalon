export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  drive: 'Задний' | 'Передний' | 'Полный';
  fuel: 'Бензин' | 'Дизель' | 'Электро' | 'Гибрид';
  engine: string;
  power: number;
  transmission: 'Автомат' | 'Механика';
  images: string[];
  description: string;
  equipment: string[];
  isAvailable: boolean;
  featured: boolean;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface Location {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: {
    [key: string]: string;
  };
  phone: string;
  email: string;
} 