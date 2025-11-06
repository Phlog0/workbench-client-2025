import { cn } from "@/shared/lib";
import { TImageNode } from "@/shared/react-flow/nodes/image";
import { NodeProps, NodeResizer, useUpdateNodeInternals } from "@xyflow/react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { drag } from "d3-drag";
import { select } from "d3-selection";
import { useBoundStore } from "@/shared/appStore";
import { debounce } from "lodash";
type RotateControlElement = HTMLDivElement;
export const ImageNode = memo(
  ({ data: { imageSrc, rotation: rotationFromNodeData }, id, selected }: NodeProps<TImageNode>) => {
    const changeInputPropertyTCell10Kv = useBoundStore(
      (state) => state.changeInputPropertyTCell10Kv,
    );
    const rotateControlRef = useRef<RotateControlElement>(null);
    const updateNodeInternals = useUpdateNodeInternals();
    const [rotation, setRotation] = useState(rotationFromNodeData);
    const debouncedChangeInputPropertyTCell10Kv = useMemo(
      () => debounce(changeInputPropertyTCell10Kv, 1000),
      [changeInputPropertyTCell10Kv],
    );
    useEffect(() => {
      if (!rotateControlRef.current) {
        return;
      }

      const selection = select(rotateControlRef.current);
      const dragHandler = drag<RotateControlElement, unknown>().on("drag", (evt) => {
        const dx = evt.x - 100;
        const dy = evt.y - 100;
        const rad = Math.atan2(dx, dy);
        const deg = rad * (180 / Math.PI);
        setRotation(180 - deg);
        updateNodeInternals(id);
      });

      selection.call(dragHandler);
    }, [id, updateNodeInternals]);

    useEffect(() => {
      debouncedChangeInputPropertyTCell10Kv({
        nodeId: id,
        keyOne: "rotation",
        keyTwo: null,
        value: Number(rotation.toFixed(1)),
      });
    }, [rotation, debouncedChangeInputPropertyTCell10Kv, id]);
    return (
      <>
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <NodeResizer
            isVisible={selected}
            minWidth={100}
            minHeight={100}
            keepAspectRatio
            lineStyle={{ borderWidth: 10 }}
            handleStyle={{ width: 30, height: 30 }}
          />
          <div
            ref={rotateControlRef}
            className={cn(
              `rotatable-node__handle`,
              `${selected ? "block outline-blue-500" : "hidden"}`,
            )}
          />
          {/* <div style={{ padding: 10 }}>{imageSrc?.slice(0, 2)}</div> */}
          <img className="w-full h-full" src={imageSrc} alt="IMAGE" />
        </div>
      </>
    );
  },
);
