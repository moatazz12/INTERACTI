import { Globe, TrendingUp, Code, Palette, Users, Camera } from 'lucide-react';
import { JSX } from 'react';

export const serviceIcons: Record<string, JSX.Element> = {
  'seo': <Globe size={18} className="text-yellow-400" />,
  'digital-marketing': <TrendingUp size={18} className="text-pink-500" />,
  'web-design-development': <Code size={18} className="text-green-500" />,
  'creative-design': <Palette size={18} className="text-purple-500" />,
  'linkedin-growth': <Users size={18} className="text-[#0A66C2]" />,
  'consulting': <Users size={18} className="text-gray-500" />,
  'media-production': <Camera size={18} className="text-red-500" />,
};
