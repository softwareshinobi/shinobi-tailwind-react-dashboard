import PageBreadcrumb from "../../components/common/PageBreadCrumb";

import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";

import ComponentCard from "../../components/common/ComponentCard";

import PageMeta from "../../components/common/PageMeta";

export default function BrandSelection() {
  return (
    <>
      <PageMeta
        title="Brand Selection / Aria OS"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      
      <PageBreadcrumb pageTitle="Brand Selection" />

      <div className="space-y-5 sm:space-y-6">

        <ComponentCard title="Available Brands">
          <ThreeColumnImageGrid />
        </ComponentCard>

      </div>
    </>
  );
}
