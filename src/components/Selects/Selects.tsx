/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-prop-types */
import { Controller } from 'react-hook-form';
import Select from 'react-select';

interface SelectProps {
  placeholder: string;
  name: string;
  id: string;
  options: Options[];
  control: any;
  hasError?: boolean;
}

export interface Options {
  value: string;
  label: string;
}

export const ExampleSelect = ({
  placeholder,
  name,
  id,
  options,
  control,
  hasError,
  defaultValue,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Select
            onChange={(event: any) => {
              onChange(event);
            }}
            onBlur={onBlur}
            components={{
              IndicatorSeparator: () => null,
            }}
            noOptionsMessage={() => 'Sem opções'}
            className="basic-single"
            classNamePrefix="select"
            placeholder={placeholder}
            defaultValue={defaultValue}
            isSearchable
            value={value}
            name={name}
            options={options}
            id={id}
            styles={{
              control: prev => ({
                ...prev,
                width: '100%',
                minHeight: '2.75rem',
                maxHeight: '2.75rem',
                background: '#fff',
                borderRadius: '0.25rem',
                border: hasError
                  ? '0.5px solid #f76d3b'
                  : '0.5px solid #141414',
                fontSize: '1rem',
                fontFamily: 'Roboto',
                fontWeight: 400,
                color: '#141414',
              }),
              container: prev => ({
                ...prev,
                width: '100%',
                minHeight: '2.75rem',
                maxHeight: '2.75rem',
                padding: '0',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: 'Roboto',
                fontWeight: 400,
                color: '#141414',
              }),
              valueContainer: prev => ({
                ...prev,
                minHeight: '2.75rem',
                maxHeight: '2.75rem',
                padding: '0 1rem 0 1rem',
              }),
              indicatorsContainer: prev => ({
                ...prev,
                minHeight: '2.75rem',
                maxHeight: '2.75rem',
              }),
              placeholder: prev => ({
                ...prev,
                color: '#D4D4D4',
              }),
              menu: prev => ({
                ...prev,
                fontSize: '1rem',
                fontFamily: 'Roboto',
                fontWeight: 400,
                color: '#D4D4D4',
                backgroundColor: '#fff',
                borderRadius: '0.25rem',
                boxShadow: 'none !important',
                border: '0.5px solid #141414',
                outline: 'none !important',
              }),
              singleValue: prev => ({
                ...prev,
                fontSize: '1rem',
                fontFamily: 'Roboto',
                fontWeight: 400,
                color: '#141414',
              }),
              option: prev => ({
                ...prev,
                backgroundColor: '#fff',
                color: '#d4d4d4',
              }),
              dropdownIndicator: prev => ({
                ...prev,
                color: '#141414',
              }),
            }}
          />
        );
      }}
    />
  );
};
