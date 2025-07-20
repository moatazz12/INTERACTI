import { ServiceDataDict } from '@/lib/dictionaries';
import { serviceIcons } from './serviceIcons';

export function transformServiceDictToArray(dict: ServiceDataDict['services']) {
  return Object.entries(dict).map(([key, { category, subservices }]) => ({
    title: category,
    icon: serviceIcons[key] || null,
    list: subservices.map(item => item.title), // si `item` est un objet { slug, title }
  }));
}
