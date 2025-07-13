import Link from 'next/link';

type Props = {
  serviceTitle: string;
  subServiceName?: string;
  locale: string;
  children?: React.ReactNode;
  className?: string;
};

export default function ServiceLink({
  serviceTitle,
  subServiceName = '',
  locale,
  children,
  className = 'text-sm text-[#4a3b5f] hover:text-[#FBD915] transition-colors duration-200',
}: Props) {
  const serviceSlug = encodeURIComponent(serviceTitle.toLowerCase().replace(/\s+/g, '-'));
  const subServiceSlug = subServiceName
    ? encodeURIComponent(subServiceName.toLowerCase().replace(/\s+/g, '-'))
    : '';

  const href = subServiceName
    ? `/${locale}/services/${serviceSlug}/${subServiceSlug}`
    : `/${locale}/services/${serviceSlug}`;

  return (
    <Link href={href} className={className}>
      {children || subServiceName || serviceTitle}
    </Link>
  );
}
