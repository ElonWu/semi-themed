import React from 'react';
import { DatePicker } from '@douyinfe/semi-ui';

import { SlideUpDatePicker } from './SlideUpDatePicker';
import { useGlobal } from '../../layout/Global';
import moment, { Moment } from 'moment';

export interface ElonDatePickerProps {
  value: Moment;
  onChange: (mnt: Moment) => void;
  showTime?: boolean;
}

export const ElonDatePicker = ({
  value,
  onChange,
  showTime = false,
}: ElonDatePickerProps) => {
  const { isMobile } = useGlobal();

  if (isMobile) return <SlideUpDatePicker value={value} onChange={onChange} />;

  return (
    <DatePicker
      value={value?.toDate()}
      onChange={(date: any) => onChange && onChange(moment(date))}
      type="date"
      density="compact"
      style={{ width: 250 }}
    />
  );
};
