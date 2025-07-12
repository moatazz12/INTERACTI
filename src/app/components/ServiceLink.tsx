import Link from 'next/link';
import { FC } from 'react';
import useCurrentLocale from '../../../hooks/useCurrentLocale';

type ServiceLinkProps = {
  serviceTitle: string;
  subServiceName?: string;
  children?: React.ReactNode;
  className?: string;

};

const ServiceLink: FC<ServiceLinkProps> = ({ 
    serviceTitle, 
    subServiceName = "" ,
    children ,
    className = "block text-sm text-[#4a3b5f] hover:text-[#FFD900] transition-colors duration-200" 

}) => {
  const locale = useCurrentLocale();
  const serviceSlug = encodeURIComponent(
  serviceTitle
    .toLowerCase()
    .replace(/&/g, '')   // Remplace '&' par 'and'
    .replace(/\s+/g, '-')   // Remplace les espaces par des tirets
);
  // const serviceSlug = encodeURIComponent(serviceTitle.toLowerCase().replace(/\s+/g, '-'));
  const subServiceSlug = subServiceName
        ? encodeURIComponent(subServiceName.toLowerCase().replace(/\s+/g, '-'))
        : "";
    const href = subServiceName
  ? `/${locale}/services/${serviceSlug}/${subServiceSlug}`
  : `/${locale}/services/${serviceSlug}`;

return (
    <Link href={href} className={className}>
    {children || subServiceName || serviceTitle}
  </Link>
);

};

export default ServiceLink;