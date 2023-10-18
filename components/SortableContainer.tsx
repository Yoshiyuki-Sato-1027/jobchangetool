import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const SortableContainer = ({
  id,
  items,
  label,
}: {
  id: string;
  items: string[];
  label: string;
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <>
      <div className="bg-blue-200 p-4 rounded-lg w-1/2">
        <h2 className="text-lg font-semibold">{label}</h2>
        {/* 企業ボールの内容をここに表示 */}
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
          <div
            ref={setNodeRef}
            className="w-full border-2 border-gray-500/75 p-5 mt-2 rounded-md"
          >
            {items.map((id: string) => (
              <SortableItem key={id} id={id} />
            ))}
          </div>
        </SortableContext>
      </div>

      <div className="w-[calc(33%-5px)]">
        <h3 className="text-xl font-bold text-center"></h3>
      </div>
    </>
  );
};

export default SortableContainer;
