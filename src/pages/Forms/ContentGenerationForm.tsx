import PageBreadcrumb from "../../components/common/PageBreadCrumb";

import PageMeta from "../../components/common/PageMeta";

import GenerationUserTypeSelect from "../../components/form/form-elements/GenerationUserTypeSelect";

import GenerationUserInputTextArea from "../../components/form/form-elements/GenerationUserInputTextArea";

import GenerationAlerts from "../../components/form/form-elements/GenerationAlerts";

import GenerationUserLensSelect from "../../components/form/form-elements/GenerationUserLensSelect";

import GenerationSystemResponseTextArea from "../../components/form/form-elements/GenerationSystemResponseTextArea";

import GenerationUserActionButtons from "../../components/form/form-elements/GenerationUserActionButtons";

export default function ContentGenerationForm() {
  return (
    <div>
      <PageMeta
        title="Generate Content / Aria OS"
        description="--"
      />
      <PageBreadcrumb pageTitle="Generate Something" />
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-6">

            <GenerationUserTypeSelect />
            <GenerationUserInputTextArea />
            
            <GenerationAlerts />

            <GenerationUserActionButtons />
            
            <GenerationUserLensSelect />
            <GenerationSystemResponseTextArea />

        </div>
      </div>
    </div>
  );
}
