import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function GenerationSystemResponseTextArea() {
  return (
    <ComponentCard title="Response From Aria OS Backend">
      <div className="space-y-6">

        {/* Disabled TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea rows={6} disabled />
        </div>

      </div>
    </ComponentCard>
  );
}
