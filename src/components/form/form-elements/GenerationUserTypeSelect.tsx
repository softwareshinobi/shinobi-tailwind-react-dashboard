import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";

export default function GenerationUserTypeSelect() {

  const options = [
    { value: "marketing", label: "Content - Article" },
    { value: "template", label: "LinkedIn - Connection Request" },
    { value: "development", label: "Post" },
  ];

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <ComponentCard title="Select Content Type">
      <div className="space-y-6">
        <div>
          <Label>Select Content Type</Label>
          <Select
            options={options}
            placeholder="Select Option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>

      </div>
    </ComponentCard>
  );
}
