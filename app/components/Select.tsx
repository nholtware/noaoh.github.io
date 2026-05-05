import classNames from 'classnames';
import {ChangeEvent, FC, PropsWithChildren} from 'react';

type SelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => void;

interface SelectText {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectText[];
  handleChange: SelectChangeHandler;
  value: string;
  className?: string;
}

const Select: FC<PropsWithChildren<SelectProps>> = (props: SelectProps) => {
  return (
    <select
      className={classNames(
        'block appearance-none rounded border border-gray-400 bg-white py-1 px-10 leading-tight focus:outline-none',
        props.className,
      )}
      onChange={props.handleChange}
      value={props.value}>
      {props.options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export {type SelectProps, Select};
