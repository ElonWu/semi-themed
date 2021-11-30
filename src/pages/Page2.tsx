import { Button } from '@douyinfe/semi-ui';
import React, { useState } from 'react';
import { ElonDropdown, ElonDropdownOption } from '../components/DropDown/index';

const Page2 = () => {
  const options: ElonDropdownOption[] = [
    {
      title: 'group1',
      key: 'group1',
      items: [
        {
          key: 'group1-primary',
          title: 'primary',
          type: 'primary',
        },
      ],
    },
    {
      title: 'group2',
      key: 'group2',
      items: [
        {
          key: 'group2-secondary',
          title: 'secondary',
          type: 'secondary',
        },
      ],
    },
  ];

  const [active, setActive] = useState<string>();

  return (
    <div className="Page2">
      <ElonDropdown
        value={active}
        onChange={setActive}
        trigger="click"
        options={options}
        // onClick={(key: string) => console.log('Click', key)}
        // onEnter={(key: string) => console.log('Enter', key)}
        // onLeave={(key: string) => console.log('Leave', key)}
        // onContextMenu={(key: string) => console.log('ContextMenu', key)}
      >
        <Button>Dropdown</Button>
      </ElonDropdown>
    </div>
  );
};

export default Page2;
