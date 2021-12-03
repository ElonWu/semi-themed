import React from 'react';
import moment, { Moment } from 'moment';

import { TimePicker } from '@douyinfe/semi-ui';

import { useGlobal } from '../../layout/Global';
import { SlideUpTimePicker } from './SlideUpTimePicker';

export interface ElonTimePickerProps {
  value: Moment;
  onChange: (mnt: Moment) => void;
}

export const ElonTimePicker = ({ value, onChange }: ElonTimePickerProps) => {
  const { isMobile } = useGlobal();

  if (isMobile) return <SlideUpTimePicker value={value} onChange={onChange} />;

  return (
    <TimePicker
      value={value?.toDate()}
      onChange={(date: any) => onChange && onChange(moment(date))}
      type="time"
      style={{ width: 160 }}
    />
  );
};
