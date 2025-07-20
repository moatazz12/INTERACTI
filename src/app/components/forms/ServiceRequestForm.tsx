import { ServiceDict, ServiceRequestDict } from '@/lib/dictionaries';
import ServiceRequestFormClient from './ServiceRequestFormClient';

interface Props {
  serviceDict: ServiceDict;
  requestDict: ServiceRequestDict;
  selectedSubServices?: ServiceDict[];
  parentServiceSlug?: string;
}

export default function ServiceRequestForm({
  serviceDict,
  requestDict,
  selectedSubServices = [],
  parentServiceSlug,
}: Props) {
  return (
    <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-b from-[#330052] to-[#FBD915] shadow-md">
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-[#330052] font-bold mb-4">
          {requestDict.ServiceRequestTitle}
        </h3>
        <ServiceRequestFormClient
          serviceDict={serviceDict}
          requestDict={requestDict}
          selectedSubServices={selectedSubServices}
          parentServiceSlug={parentServiceSlug}
        />
      </div>
    </div>
  );
}
