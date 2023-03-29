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

export const PeriodAndSectorSelect = ({
  placeholder,
  name,
  id,
  options,
  control,
  hasError,
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
            className="basic-single"
            classNamePrefix="select"
            placeholder={placeholder}
            isSearchable
            value={value}
            name={name}
            options={options}
            id={id}
            styles={{
              control: prev => ({
                ...prev,
                width: '100%',
                minHeight: '2rem',
                maxHeight: '2rem',
                borderRadius: '1rem',
                border: hasError ? '0.5px solid #F00' : '0.5px solid #989898',
                outline: 'none !important',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
                fontSize: '0.75rem',
                // fontFamily: 'Inter',
                fontWeight: 400,
                color: 'rgba(0, 0, 0, 0.4)',
              }),

              container: prev => ({
                ...prev,
                width: '100%',
                minHeight: '2rem',
                maxHeight: '2rem',
                padding: '0',
                outline: 'none',
                fontSize: '0.75rem',
                // fontFamily: 'Inter',
                fontWeight: 400,
                color: 'rgba(0, 0, 0, 0.4)',
              }),
              valueContainer: prev => ({
                ...prev,
                minHeight: '2rem',
                maxHeight: '2rem',
                padding: '0 0.625rem 0 0.625rem',
              }),
              indicatorsContainer: prev => ({
                ...prev,
                minHeight: '2rem',
                maxHeight: '2rem',
              }),
              placeholder: prev => ({
                ...prev,
                color: 'rgba(0, 0, 0, 0.4)',
              }),
              menu: prev => ({
                ...prev,
                fontSize: '0.75rem',
                // fontFamily: 'Inter',
                fontWeight: 400,
                color: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '0.25rem',
                boxShadow: 'none !important',
                border: '0.5px solid #989898',
                outline: 'none !important',
              }),
              singleValue: prev => ({
                ...prev,
                fontSize: '0.75rem',
                // fontFamily: 'Inter',
                fontWeight: 400,
                color: '#272727',
              }),
              option: prev => ({
                ...prev,
                backgroundColor: '#fff',
                color: 'rgba(0, 0, 0, 0.4)',
              }),
              dropdownIndicator: prev => ({
                ...prev,
                color: '#5496FF',
              }),
            }}
          />
        );
      }}
    />
  );
};
