import React from "react";

interface IInputFormComponentProps {
  label: string;
  value: string;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;

}

export const InputFormComponent = React.forwardRef<HTMLInputElement, IInputFormComponentProps>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        type={props.type == null ? "text" : props.type}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ?
          props.onPressEnter && props.onPressEnter() : undefined} />
    </label>
  );
});
