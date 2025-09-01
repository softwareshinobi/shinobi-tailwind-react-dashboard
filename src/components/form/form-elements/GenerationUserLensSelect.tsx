import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import MultiSelect from "../MultiSelect";

export default function SelectInputs() {

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const multiOptions = [
    { value: "1", text: "Talk like Jeff Winger", selected: false },
    { value: "2", text: "Fall Sale CTA", selected: false },
    { value: "3", text: "Format Like Threads", selected: false },
    { value: "4", text: "Format Like LinkedIn", selected: false },
  ];
  return (
    <ComponentCard title="Select Content Lens Options">
      <div className="space-y-6">

        <div>
          <MultiSelect
            label="Multiple Select Options"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Selected Values: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
